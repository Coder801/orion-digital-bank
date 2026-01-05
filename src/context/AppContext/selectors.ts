import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { api } from "@/store/api";
import { selectCurrentLanguage } from "@/store/slices/languageSlice";

export const selectProfileQuery = () => (state: RootState) =>
  api.endpoints.getProfile.select(selectCurrentLanguage(state))(state);
