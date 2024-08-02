



import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


const createAxiosInstance = (token) => axios.create({
  baseURL: "https://connections-api.goit.global/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchAll = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token; 
    const instance = createAxiosInstance(token);
    
    try {
      const response = await instance.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (newContacts, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token; 
    const instance = createAxiosInstance(token);
    
    try {
      const response = await instance.post("/contacts", newContacts);
      toast.success('Contact added');
      return response.data;
    } catch (error) {
      toast.error('Error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactsId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token; 
    const instance = createAxiosInstance(token);
    
    try {
      const response = await instance.delete(`/contacts/${contactsId}`);
      toast.success('Contact Deleted');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ contactsId, updatedData }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token; 
    const instance = createAxiosInstance(token);
    
    try {
      const response = await instance.put(`/contacts/${contactsId}`, updatedData);
      toast.success('Contact updated');
      return response.data;
    } catch (error) {
      toast.error('Error updating contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
