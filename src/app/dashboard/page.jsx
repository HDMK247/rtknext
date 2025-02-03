'use client';

import { logOut } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/freatures/authSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await logOut();
    dispatch(logoutUser());
    router.push('/login');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>
      <button
        onClick={handleLogout}
        className="p-2 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
