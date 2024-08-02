
import { createSelector } from 'reselect';

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.filter;
export const selectLoading = (state) => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);


