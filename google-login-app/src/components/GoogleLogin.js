import axios from 'axios';
import React from 'react';

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    axios.get("http://localhost:8080/oauth2/authorization/google");
  };

  return (
    <div>
      <h1>Welcome to Google Login Example</h1>
      <button onClick={handleGoogleLogin}>Google 로그인</button>
    </div>
  );
};

export default GoogleLogin;
