

import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter)
    );
  }
);



