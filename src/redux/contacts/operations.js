

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchAll = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (newContacts, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", newContacts);
        toast.success('Contact added');
        return response.data;
      } catch (error) {
        toast.error('Error');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const deleteContacts = createAsyncThunk("contacts/deleteContacts",
    async (contactsId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactsId}`);
            toast.success('Contact Delete')
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ contactsId, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactsId}`, updatedData);
      toast.success('Contact updated');
      return response.data;
    } catch (error) {
      toast.error('Error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


