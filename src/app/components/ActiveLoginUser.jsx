'use client';

import { getDocuments } from '@/lib/firestore'; // পূর্বে সংজ্ঞায়িত Firestore CRUD ফাংশন
import { useEffect, useState } from 'react';

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        // ধরুন আপনার Firestore-এ "users" নামে একটি collection আছে
        const data = await getDocuments('users');
        setUsers(data);
      } catch (error) {
        console.error('ব্যবহারকারীদের ডাটা লোড করতে সমস্যা:', error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="p-4 border rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">ব্যবহারকারীদের তালিকা</h3>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-3 border-b pb-2">
              <p>
                <strong>নাম:</strong> {user.name}
              </p>
              <p>
                <strong>ইমেইল:</strong> {user.email}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>কোনও ব্যবহারকারীর তথ্য পাওয়া যায়নি।</p>
      )}
    </div>
  );
}
