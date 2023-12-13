import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "src/setup/store"

const reducerSelector = (state: RootState) => state.signInReducer

const isAuthorizedSelector = createSelector(
  reducerSelector,
  (state) => !!state.user.email,
)

const verifyLoadingSelector = createSelector(
  reducerSelector,
  (state) => state.verifyLoading,
)

const userDataSelector = createSelector(reducerSelector, (state) => state.user)

const roleSelector = createSelector(userDataSelector, (userData) => ({
  isAdmin: userData.role === "admin",
  isUser: userData.role === "user",
  isSuperUser: userData.role === "super_user",
}))

export const signInBasicSelectors = {
  isAuthorizedSelector,
  verifyLoadingSelector,
  roleSelector,
}
