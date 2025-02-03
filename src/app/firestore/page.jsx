'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  deleteItem,
  fetchItems,
  updateItem,
} from '../../redux/freatures/firestoreSlice';

export default function FirestorePage() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.firestore);
  const [newItem, setNewItem] = useState('');

  // Firestore থেকে ডাটা লোড করা
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // নতুন আইটেম যোগ করার ফাংশন
  const handleAdd = async () => {
    if (!newItem.trim()) return;
    dispatch(addItem(newItem));
    setNewItem('');
  };

  // আইটেম আপডেট করার ফাংশন
  const handleUpdate = (id, currentName) => {
    dispatch(updateItem({ id, currentName }));
  };

  // আইটেম ডিলিট করার ফাংশন
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        Redux Toolkit-এর সাথে Firestore CRUD
      </h2>

      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="নতুন আইটেম লিখুন"
          className="border p-2 flex-1 mr-2 rounded text-gray-900"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white p-2 rounded"
        >
          যোগ করুন
        </button>
      </div>

      {status === 'loading' && <p>লোড হচ্ছে...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{item.name}</span>
            <div>
              <button
                onClick={() => handleUpdate(item.id, item.name)}
                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
              >
                আপডেট
              </button>
              <button
                onClick={() => handleDelete(item.id)}
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
