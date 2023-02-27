import React, { useContext } from 'react';
import Navbar from '../components/navbar';
import MobileNavbar from '../components/mobileNavbar';
import UserInput from '../components/userInput';
import AppContext from '../lib/app-context';

export default function Home() {
  const { src, setSrc, prompt, setPrompt, size, setSize, user } = useContext(AppContext);
  return (
    <div className='container'>
      <Navbar />
      <div className='row mt-2 ml-1 mr-1'>
        <div className='col-full'>
          <h1 className='green t-align-center'>Text to Image with AI Image Generator</h1>
          <h3 className='t-align-center white'>Convert words to images in seconds with DALL.E 2</h3>
        </div>
      </div>
      <UserInput src={src} setSrc={setSrc} prompt={prompt} setPrompt={setPrompt} size={size} setSize={setSize} user={user} />
      <MobileNavbar />
    </div>
  );
}
