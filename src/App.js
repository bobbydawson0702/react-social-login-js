import React, { useCallback, useState } from 'react';
import './App.css';
import { User } from './User';
import {
  LoginSocialTwitter,
} from './components/SocialLoginTwitter/LoginSocialTwitter';

import {
  TwitterLoginButton,
} from 'react-social-login-buttons';

const REDIRECT_URI =
  'https://react-social-login-js.vercel.app';
// const REDIRECT_URI = 'http://localhost:3000/account/login'

const App = () => {
  const [provider, setProvider] = useState[null];
  const [profile, setProfile] = useState[null];

  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);

  return (
    <div>
      {provider && profile && (
        <User provider={provider} profile={profile} onLogout={onLogout} />
      )}
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
        <h1 className="title">ReactJS Social Login</h1>

        <LoginSocialTwitter
          client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY || ''}
          client_secret={process.env.REACT_APP_TWITTER_V2_APP_SECRET || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <TwitterLoginButton />
        </LoginSocialTwitter>
      </div>
    </div>
  );
};

export default App;