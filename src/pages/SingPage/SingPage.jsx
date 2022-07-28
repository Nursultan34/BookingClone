import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './SingPage.css';

function SingPage() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 2.5 }} exit={{ opacity: 1 }}>
      <Navbar />
      <div className="SingPage">
        <div className="SingPageItem">
          <h1>Sign in or create an account</h1>
          <div className="Input">
            <h2>Email address</h2>
            <div className="inputBlock">
              <input type="text" />
            </div>
            <div className="buttonBlock">
              <button>
                <span>Continue with email</span>
              </button>
            </div>
          </div>
          <div className="panel">
            <div className="line"></div>
            <span>or use one of these options</span>
            <div className="line"></div>
          </div>
          <div className="IconPage">
            <div className="button-content">
              <div className="button-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  role="img">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                </svg>
              </div>
              <div className="button-image">
                <svg
                  viewBox="0 0 262 262"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  aria-hidden="true"
                  focusable="false"
                  width="24"
                  height="24"
                  role="img">
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"></path>
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"></path>
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"></path>
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"></path>
                </svg>
              </div>
              <div className="button-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  width="24"
                  height="24"
                  role="img">
                  <path d="M14.25 15.75v4.768a1.982 1.982 0 0 1-1.982 1.982H5.732a1.982 1.982 0 0 1-1.983-1.981V4.983A1.985 1.985 0 0 1 5.733 3H7.5a.75.75 0 0 0 0-1.5H5.733A3.483 3.483 0 0 0 2.25 4.983v15.536A3.482 3.482 0 0 0 5.733 24h6.535a3.482 3.482 0 0 0 3.482-3.482V15.75a.75.75 0 0 0-1.5 0zM3 19.5h12a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zM20.25 6.75a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0zm1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0zm-4.676-2.194l-2.9 3.873h-.002l-1.499-1.5a.75.75 0 1 0-1.06 1.061l1.5 1.5a1.502 1.502 0 0 0 2.26-.16l2.901-3.874a.75.75 0 0 0-1.2-.9z"></path>
                </svg>
              </div>
              {open && (
                <div className="button-image">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 170 170"
                    aria-hidden="true"
                    focusable="false"
                    role="img">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z"></path>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="span">
            <span className="span-block" onClick={() => setOpen(!open)}>
              More ways to sign in
            </span>
          </div>
          <div className="text-block">
            <div className="text1">
              <p>
                By signing in or creating an account, you agree with our Terms & Conditions and
                Privacy Statement
              </p>
            </div>

            <div className="text2">
              All rights reserved
              <br />
              Copyright (2006-2022) – Booking.com™
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SingPage;
