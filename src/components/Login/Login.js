import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseInitialization from '../../firebase/firebase.init';


firebaseInitialization();
const provider = new GoogleAuthProvider();

const Login = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { email, displayName, PhotoURL } = result.user;
        const userInfo = {
          name: displayName,
          email: email,
          photo: PhotoURL,
        };
        setUser(userInfo);
      });
  };
  return (
    <div className="w-50 mx-auto p-5">
      <h2 className="pb-5">Please Log In</h2>
      {/* <h1>{ user.name }</h1> */}
      <Form>
        <Form.Group className="" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Link to="/signup">New User? Sign Up</Link>
        </Form.Group>
        <Button className="btnHero mb-3" variant="primary" type="submit">
          Submit
        </Button>
        <h6 className="mb-4">-----------or-----------</h6>
      </Form>
      <Button className="pt-2 pb-2 ps-5 pe-5 rounded-pill" onClick={handleGoogleSignIn}>
        Sign In Using Google
      </Button>
    </div>
  );
};

export default Login;