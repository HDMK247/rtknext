'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex space-x-4">
          <Link href="/">
            <span className="cursor-pointer hover:underline">Home</span>
          </Link>
          <Link href="/signup">
            <span className="cursor-pointer hover:underline">Signup</span>
          </Link>
          <Link href="/login">
            <span className="cursor-pointer hover:underline">Login</span>
          </Link>
          <Link href="/dashboard">
            <span className="cursor-pointer hover:underline">Dashboard</span>
          </Link>
          <Link href="/firestore">
            <span className="cursor-pointer hover:underline">
              Firestore CRUD
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
