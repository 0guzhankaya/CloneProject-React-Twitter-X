import { createSlice } from "@reduxjs/toolkit";
import EggAvatar from "../../images/TwitterEggAvatar.jpg";

const initialState = {
  currentAccount: {
    id: 1,
    username: "oguzhankaya",
    fullname: "Oğuzhan Kaya",
    avatar: { EggAvatar },
  },
  accounts: [
    {
      id: 1,
      username: "oguzhankaya",
      fullname: "Oğuzhan Kaya",
      avatar: { EggAvatar },
    },
    {
      id: 2,
      username: "dummy",
      fullname: "Dummy Dummy",
      avatar: { EggAvatar },
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipulation methods
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
