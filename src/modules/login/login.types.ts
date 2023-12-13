import { TLoadingState } from "src/tools/types"
import { IApiUser, IUser } from "src/modules/user/user.types"

export interface IAuthData {
  accessToken: string
  user: IApiUser
}

export interface ILoginSlice {
  user: IUser
  verifyLoading: TLoadingState
  loginLoading: TLoadingState
}
