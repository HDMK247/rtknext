'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../lib/auth';
import { setUser } from '../../redux/freatures/authSlice';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(email, password);
      dispatch(setUser(user));
      router.push('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-green-600 text-white rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
