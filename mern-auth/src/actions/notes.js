import axios from "axios";
import {
  GET_PUBLIC_NOTES_SUCCESS,
  GET_PUBLIC_NOTES_FAILURE,
  GET_PRIVATE_NOTES_SUCCESS,
  GET_PRIVATE_NOTES_FAILURE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
} from "./types";

// Action creator for getting all public notes
export const getPublicNotes = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/notes/public");
    dispatch({
      type: GET_PUBLIC_NOTES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PUBLIC_NOTES_FAILURE,
      payload: error.message,
    });
  }
};

// Action creator for getting all private notes
export const getPrivateNotes = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/notes/private");
    dispatch({
      type: GET_PRIVATE_NOTES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRIVATE_NOTES_FAILURE,
      payload: error.message,
    });
  }
};

// Action creator for adding a new note
export const addNote = (title, content, isPublic) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/Createnotes", {
      title,
      content,
      isPublic,
    });
    dispatch({
      type: ADD_NOTE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_NOTE_FAILURE,
      payload: error.message,
    });
  }
};
