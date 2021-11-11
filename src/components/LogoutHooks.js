import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '166728991632-p3dj1binje011v89557e8u0vj9no6ilr.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
        <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;