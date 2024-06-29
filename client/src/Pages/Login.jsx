import { useState } from 'react';
// import loginImage from '../assets/login.png';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-textPrimary">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-lg">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-lg flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-textPrimary"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-textPrimary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-textSecondary p-4 rounded-lg hover:bg-accent transition-colors"
          >
            Login
          </button>
          
        </form>
      
      </div>
        </div>
      
    </div>
  );
};

export default LoginPage;
