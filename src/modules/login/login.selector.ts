import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "src/config/store"

const reducerSelector = (state: RootState) => state.loginReducer

export const isAuthorizedSelector = createSelector(
  reducerSelector,
  (state) => !!state.user.email,
)
