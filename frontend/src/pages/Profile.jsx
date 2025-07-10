import React from 'react';
import ProfileTop from '../components/ProfileTop';
import ProfileMiddle from '../components/ProfileMiddle';
import ProfileBottom from '../components/ProfileBottom';
function Profile() {
    return ( 
    <div style={{height:"h-full"}} className='p-5 eco-static-bg'>
    <ProfileTop/>
    <ProfileMiddle/>
    <ProfileBottom/>
    </div> );
}

export default Profile;