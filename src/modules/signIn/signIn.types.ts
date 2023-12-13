import { TLoadingState } from "src/tools/types"
import { IApiUser, IUser } from "src/modules/user/user.types"

export interface IAuthData {
  accessToken: string
  user: IApiUser
}

export interface ISignInSlice {
  user: IUser
  verifyLoading: TLoadingState
  signInLoading: TLoadingState
}
