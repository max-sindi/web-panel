import { put, takeLatest } from "redux-saga/effects"
import { IApiUser, IUser, usersBasicActions } from "src/modules/user/user.slice"
import { friendsBasicActions, IFriend } from "src/modules/friend/friend.slice"
import axiosInstance from "src/setup/axios"

interface INormalizedUsersData {
  friends: IFriend[]
  users: IUser[]
}

interface INormalizedUserData {
  user: IUser
  friends: IFriend[]
}

export const normalizeUserData = (data: IApiUser): INormalizedUserData => {
  const { friends } = data
  const user = { ...data, friends: friends.map(({id}) => id) }
  return { user, friends }
}

export const normalizeUsersList = (data: IApiUser[]): INormalizedUsersData => {
  return data.reduce<INormalizedUsersData>(
    (acc, item) => {
      const normalizedItem = normalizeUserData(item)
      return {
        ...acc,
        friends: [...acc.friends, ...normalizedItem.friends],
        users: [
          ...acc.users,
          { ...item, friends: normalizedItem.user.friends },
        ],
      }
    },
    { friends: [], users: [] },
  )
}

export function* getUsersSaga() {
  const { data }: { data: IApiUser[] } = yield axiosInstance.get("/users")
  const { friends, users } = normalizeUsersList(data)

  yield put(usersBasicActions.getAllUsersSuccess(users))
  yield put(friendsBasicActions.getAllFriendsSuccess(friends))
}

export function* userSaga() {
  yield takeLatest(usersBasicActions.getAllUsers, getUsersSaga)
}
