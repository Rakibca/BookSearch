import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "./bookService";

const initialState = {
  books: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create a new book
export const createBook = createAsyncThunk(
  "books/create",
  async (bookData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bookService.createBook(bookData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user's books
// export const getBooks = createAsyncThunk(
//   "books/getAll",
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await bookService.getBooks(token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Delete user's book
// export const deleteBook = createAsyncThunk(
//   "books/delete",
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await bookService.deleteBook(id, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createBook.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(createBook.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.goals.push(action.payload);
//       })
//       .addCase(createBook.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(getBooks.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getBooks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.goals = action.payload;
//       })
//       .addCase(getBooks.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(deleteBook.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteBook.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.goals = state.goals.filter(
//           (goal) => goal._id !== action.payload.id
//         );
//       })
//       .addCase(deleteBook.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       });
//   },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;