import React, { useContext } from 'react';
import Navbar from '../components/navbar';
import MobileNavbar from '../components/mobileNavbar';
import SignIn from '../components/sign-in';
import AppContext from '../lib/app-context';

export default function SignInPage({ username, setUsername, password, setPassword }) {
  const { user, handleSignIn } = useContext(AppContext);
  return (
    <div className='container'>
      <Navbar />
      <SignIn username={username} setUsername={setUsername} password={password} setPassword={setPassword} user={user} handleSignIn={handleSignIn} />
      <MobileNavbar />
    </div>
  );
}
