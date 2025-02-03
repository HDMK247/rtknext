'use client';

import { useEffect, useState } from 'react';
import {
  addDocument,
  deleteDocument,
  getDocuments,
  updateDocument,
} from '../../lib/firestore';

export default function CrudPage() {
  const [docs, setDocs] = useState([]);
  const [newDoc, setNewDoc] = useState('');

  // ডকুমেন্ট লোড করার ফাংশন
  const fetchDocuments = async () => {
    try {
      const data = await getDocuments('items'); // এখানে "items" হলো collection-এর নাম
      setDocs(data);
    } catch (error) {
      console.error('ডকুমেন্ট লোড করতে সমস্যা: ', error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  // নতুন ডকুমেন্ট যোগ করার ফাংশন
  const handleAdd = async () => {
    if (!newDoc.trim()) return;
    try {
      await addDocument('items', { name: newDoc });
      setNewDoc('');
      fetchDocuments();
    } catch (error) {
      console.error('ডকুমেন্ট যোগ করতে সমস্যা: ', error);
    }
  };

  // ডকুমেন্ট আপডেট করার ফাংশন
  const handleUpdate = async (id, currentName) => {
    try {
      await updateDocument('items', id, { name: currentName + ' (Updated)' });
      fetchDocuments();
    } catch (error) {
      console.error('ডকুমেন্ট আপডেট করতে সমস্যা: ', error);
    }
  };

  // ডকুমেন্ট মুছে ফেলার ফাংশন
  const handleDelete = async (id) => {
    try {
      await deleteDocument('items', id);
      fetchDocuments();
    } catch (error) {
      console.error('ডকুমেন্ট মুছে ফেলতে সমস্যা: ', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Firestore CRUD অপারেশন</h2>

      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newDoc}
          onChange={(e) => setNewDoc(e.target.value)}
          placeholder="নতুন ডকুমেন্টের নাম লিখুন"
          className="border p-2 flex-1 mr-2 rounded text-blue-500"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-800 text-white p-2 rounded"
        >
          যোগ করুন
        </button>
      </div>

      <ul>
        {docs.map((doc) => (
          <li
            key={doc.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{doc.name}</span>
            <div>
              <button
                onClick={() => handleUpdate(doc.id, doc.name)}
                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
              >
                আপডেট
              </button>
              <button
                onClick={() => handleDelete(doc.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                মুছে ফেলুন
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
