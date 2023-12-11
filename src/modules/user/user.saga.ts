import { put, takeLatest } from "redux-saga/effects"
import { IApiUser, IUser, usersBasicActions } from "src/modules/user/user.slice"
import { friendsBasicActions, IFriend } from "src/modules/friend/friend.slice"
import axiosInstance from "src/config/axios"

interface INormalizedData {
  friends: IFriend[]
  users: IUser[]
}

const normalizeData = (data: IApiUser[]): INormalizedData => {
  return data.reduce<INormalizedData>(
    (acc, cur) => {
      return {
        ...acc,
        friends: [...acc.friends, ...cur.friends],
        users: [
          ...acc.users,
          { ...cur, friends: cur.friends.map(({ id }) => id) },
        ],
      }
    },
    { friends: [], users: [] },
  )
}

function* getUsersSaga() {
  const { data }: { data: IApiUser[] } = yield axiosInstance.get("/users")
  const { friends, users } = normalizeData(data)

  yield put(usersBasicActions.getAllUsersSuccess(users))
  yield put(friendsBasicActions.getAllFriendsSuccess(friends))
}

export function* userSaga() {
  yield takeLatest(usersBasicActions.getAllUsers, getUsersSaga)
}
