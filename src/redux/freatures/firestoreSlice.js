'use client';

import {
  addDocument,
  deleteDocument,
  getDocuments,
  updateDocument,
} from '@/lib/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Firestore থেকে ডাটা ফেচ করা
export const fetchItems = createAsyncThunk('items/fetch', async () => {
  const data = await getDocuments('items');
  return data;
});

// নতুন আইটেম যোগ করা
export const addItem = createAsyncThunk('items/add', async (itemName) => {
  await addDocument('items', { name: itemName });
  const data = await getDocuments('items');
  return data;
});

// আইটেম আপডেট করা
export const updateItem = createAsyncThunk(
  'items/update',
  async ({ id, currentName }) => {
    await updateDocument('items', id, { name: currentName + ' (Updated)' });
    const data = await getDocuments('items');
    return data;
  },
);

// আইটেম ডিলিট করা
export const deleteItem = createAsyncThunk('items/delete', async (id) => {
  await deleteDocument('items', id);
  const data = await getDocuments('items');
  return data;
});

const initialState = {
  items: [],
  status: 'idle', // 'loading', 'succeeded', 'failed'
  error: null,
};

const firestoreSlice = createSlice({
  name: 'firestore',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default firestoreSlice.reducer;
