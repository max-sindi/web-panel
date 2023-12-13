import { IFriend, TFriendId } from "src/modules/friend/friend.types"
import { Modify } from "src/tools/types"

export interface IApiUser extends Modify<IUser, { friends: Array<IFriend> }> {}

export interface IUser {
  id: number
  role: "admin" | "super_user" | "user"
  first_name: string
  last_name: string
  email: string
  gender: string
  ip_address: string
  friends: Array<TFriendId>
}
