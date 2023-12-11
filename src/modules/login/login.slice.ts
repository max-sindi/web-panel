import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IApiUser } from "src/modules/user/user.slice"

interface ILoginSlice {
  user: IApiUser
}

const getInitialState = (): ILoginSlice => ({
  user: {} as IApiUser,
})

const loginSlice = createSlice({
  name: "authSlice",
  initialState: getInitialState(),
  reducers: {
    loginUser: (
      state,
      payload: PayloadAction<{ email: string; password: string }>,
    ) => {},
    loginUserSuccess: (
      state,
      { payload: { user } }: PayloadAction<ILoginSlice>,
    ) => {
      state.user = user
    },
    logout: getInitialState,
  },
})

export default loginSlice.reducer
export const loginBasicActions = loginSlice.actions
