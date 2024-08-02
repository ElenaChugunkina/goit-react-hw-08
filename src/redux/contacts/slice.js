

import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from '../auth/operations';
import { fetchAll, addContacts, deleteContacts, editContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    deleteModalOpen: false,
    editModalOpen: false,
    currentContact: {},
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    openDeleteModal(state, action) {
      state.deleteModalOpen = true;
      state.currentContact = action.payload;
    },
    closeDeleteModal(state) {
      state.deleteModalOpen = false;
      state.currentContact = {};
    },
    openEditModal(state, action) {
      state.editModalOpen = true;
      state.currentContact = action.payload;
    },
    closeEditModal(state) {
      state.editModalOpen = false;
      state.currentContact = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        
        state.items = [];
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload.id);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.items = state.items.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
      });
  },
});
export const { openDeleteModal, closeDeleteModal, openEditModal, closeEditModal } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
