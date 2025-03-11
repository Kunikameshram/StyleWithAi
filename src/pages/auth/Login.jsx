import React, { useState } from 'react';

const AuthPages = ({ onLoginSuccess }) => {
  const [activePage, setActivePage] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupMobile, setSignupMobile] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  const validEmail = 'test@gmail.com';
  const validPassword = 'password';

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail === validEmail && loginPassword === validPassword) {
      setMessage({ type: 'success', text: 'Login successful!' });
      onLoginSuccess();
    } else {
      setMessage({ type: 'error', text: 'Invalid email or password.' });
    }
    setTimeout(() => {
      setMessage({ type: '', text: '' });
    }, 3000);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signupName || !signupMobile || !signupEmail || !signupPassword) {
      setMessage({ type: 'error', text: 'Please fill in all fields.' });
    } else {
      setMessage({ type: 'success', text: 'Account created successfully! Please login.' });
      setTimeout(() => {
        setActivePage('login');
        setMessage({ type: '', text: '' });
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        {activePage === 'login' && (
          <div className="bg-white rounded-xl shadow-lg p-8 w-full">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">LOGIN</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="loginEmail"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  id="loginPassword"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg"
              >
                Login
              </button>
            </form>
            <p className="text-center text-gray-600 mt-6">
              If you haven't registered yet,{' '}
              <button
                onClick={() => setActivePage('signup')}
                className="text-indigo-600 font-medium hover:underline"
              >
                Register Now
              </button>
            </p>
          </div>
        )}

        {activePage === 'signup' && (
          <div className="bg-white rounded-xl shadow-lg p-8 w-full">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">SIGN-UP</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label htmlFor="signupName" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="signupName"
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="signupMobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                <input
                  id="signupMobile"
                  type="tel"
                  value={signupMobile}
                  onChange={(e) => setSignupMobile(e.target.value)}
                  placeholder="Enter mobile number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="signupEmail"
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="Enter email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  id="signupPassword"
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg mt-2"
              >
                Sign-up
              </button>
            </form>
            <p className="text-center text-gray-600 mt-6">
              If you already have an account,{' '}
              <button
                onClick={() => setActivePage('login')}
                className="text-indigo-600 font-medium hover:underline"
              >
                Login Now
              </button>
            </p>
          </div>
        )}
      </div>
      {message.text && (
        <div
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-all duration-300 ${
            message.type === 'error' ? 'bg-red-500' : 'bg-green-500'
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default AuthPages;
