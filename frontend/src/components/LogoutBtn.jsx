import React, { useContext } from 'react';
import authContext from '../contexts/authcontext';

function LogoutBtn() {
  const { setAuthUser } = useContext(authContext);

  const logoutHandler = () => {
    setAuthUser(null); 
  };

  return (
    <button
      className="inline-block px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-full transition duration-200"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
