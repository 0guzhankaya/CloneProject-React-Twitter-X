import { createSlice } from "@reduxjs/toolkit";
import TwitterEggAvatar from "../../images/TwitterEggAvatar.jpg";

const initialState = {
  currentAccount: {
    id: 1,
    username: "oguzhankaya",
    fullName: "Oğuzhan Kaya",
    avatar: { TwitterEggAvatar },
  },
  accounts: [
    {
      id: 1,
      username: "oguzhankaya",
      fullName: "Oğuzhan Kaya",
      avatar: { TwitterEggAvatar },
    },
    {
      id: 2,
      username: "dummy",
      fullName: "Dummy",
      avatar: { TwitterEggAvatar },
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipule etme metodlari
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
