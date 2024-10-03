import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { signIn } from '../utils/auth';
import Logo from '../assets/dark-night.png';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '100vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '50rem',
        width: '100%',
        minWidth: '50rem',
        paddingBlock: '0 5rem',
        backgroundColor: 'Navy Blue',
      }}
    >
      <h1 className="login">Welcome to Dark Night of the Soul</h1>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Image src={Logo} alt="logo" className="logo-image" />
      </div>
      <h4 className="text">Click the button below and start tracking your Job Search with ease!</h4>
      <Button variant="warning" type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
