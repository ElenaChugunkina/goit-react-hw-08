


import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchAll, editContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
    deleteModalOpen: false,
    editModalOpen: false,
    currentContact: null,
  },
  reducers: {
    openDeleteModal(state, action) {
      state.deleteModalOpen = true;
      state.currentContact = action.payload;
    },
    closeDeleteModal(state) {
      state.deleteModalOpen = false;
      state.currentContact = null;
    },
    openEditModal(state, action) {
      state.editModalOpen = true;
      state.currentContact = action.payload;
    },
    closeEditModal(state) {
      state.editModalOpen = false;
      state.currentContact = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchAll.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(editContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(editContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export const { openDeleteModal, closeDeleteModal, openEditModal, closeEditModal } = contactsSlice.actions;
export default contactsSlice.reducer;