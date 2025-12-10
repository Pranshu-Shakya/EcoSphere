import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ShopContext } from '../contexts/ShopContext';
import {jwtDecode} from 'jwt-decode';

function InitiativeInDetail() {
  const location = useLocation();
  const { id } = useParams();
  const { backendUrl } = useContext(ShopContext);

  const [initiative, setInitiative] = useState(location.state || null);
  const [joins, setJoins] = useState(0);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    setInitiative(location.state || null);
  }, [location.state]);

  const fetchJoins = async () => {
    try {
      const res = await axios.get(
        `${backendUrl}/api/initiative/${id}`,
        { headers: { token } }
      );
      setJoins(res.data.joins || 0);
      setMembers(res.data.joinArray || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id) fetchJoins();
  }, [id]);

  const handleShare = async () => {
    const url = window.location.href;
    const title = initiative?.title || 'Check this out!';
    const text = 'Have a look at this Initiative I found:';

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        try {
          await navigator.clipboard.writeText(url);
          toast.info('Link copied to clipboard!');
        } catch {
          toast.error('Failed to share link');
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard!');
      } catch {
        toast.error('Failed to copy link');
      }
    }
  };

  const InitiativeAction = async (initiativeId, action) => {
    try {
      setLoading(true);
      await axios.post(
        `${backendUrl}/api/initiative/memberaction`,
        { initiativeId, action },
        { headers: { token } }
      );
      await fetchJoins();
      toast.success(`Initiative ${action} successful`);
    } catch (error) {
      console.error(error);
      toast.error('Action failed');
    } finally {
      setLoading(false);
    }
  };

  if (!initiative) {
    return (
      <div className="text-center text-red-600 p-6">
        No initiative data found.
      </div>
    );
  }

  const userId = token ? jwtDecode(token).id : null;
  const isMember = members.includes(userId);

  return (
    <div className="eco-static-bg">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-green-50 shadow-lg rounded-lg overflow-hidden">

          {initiative.imgUrl && (
            <img
              src={initiative.imgUrl}
              alt={initiative.title}
              className="w-full h-64 object-cover"
            />
          )}

          <div className="p-6">
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              {initiative.title}
            </h1>

            <div className="flex justify-between text-sm text-green-900 mb-4">
              <span>
                <b>LEAD {(initiative.leader?.name || 'Unknown').toUpperCase()}</b>
              </span>
              <span>
                {new Date(initiative.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div className="flex gap-4 my-2">

              {/* Share */}
              <button onClick={handleShare}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#0d542b" viewBox="0 0 640 640">
                  <path d="M448 256C501 256 544 213 544 160C544 107 501 64 448 64C395 64 352 107 352 160C352 165.4 352.5 170.8 353.3 176L223.6 248.1C206.7 233.1 184.4 224 160 224C107 224 64 267 64 320C64 373 107 416 160 416C184.4 416 206.6 406.9 223.6 391.9L353.3 464C352.4 469.2 352 474.5 352 480C352 533 395 576 448 576C501 576 544 533 544 480C544 427 501 384 448 384C423.6 384 401.4 393.1 384.4 408.1L254.7 336C255.6 330.8 256 325.5 256 320C256 314.5 255.5 309.2 254.7 304L384.4 231.9C401.3 246.9 423.6 256 448 256z"/>
                </svg>
              </button>

              {/* Join / Leave */}
              {token ? (
                <button
                  disabled={loading}
                  onClick={() =>
                    InitiativeAction(initiative._id, isMember ? 'leave' : 'join')
                  }
                  className="px-4 py-2 hover:bg-green-100 disabled:opacity-60"
                >
                  {loading ? 'Loading...' : `${isMember ? 'Joined' : 'Join'} (${joins})`}
                </button>
              ) : (
                <button disabled className="opacity-60">
                  Login to join
                </button>
              )}
            </div>

            <p className="text-green-900 whitespace-pre-wrap leading-relaxed">
              {initiative.description}
            </p>

            {initiative.location && (
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-green-800">
                  Location
                </h2>
                <iframe
                  title="map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(initiative.location)}&output=embed`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="rounded-lg mt-2"
                />
              </div>
            )}

            <div className="mt-6">
              <span className="text-lg font-semibold text-green-900">
                Contact Us
              </span>

              <div className="flex gap-3 mt-2">
                <a
                  href={`mailto:${initiative.leader?.email}`}
                  className="text-green-900"
                >
                  Email Leader
                </a>

                <a
                  href={`https://wa.me/91${initiative.leader?.phone}`}
                  className="text-green-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default InitiativeInDetail;
