import { takeLatest, put, call, select } from "redux-saga/effects"
import { signInBasicActions } from "src/modules/signIn/signIn.slice"
import axiosInstance from "src/setup/axios"
import { usersBasicSelectors } from "src/modules/user/user.slice"
import { getToken, removeToken, setToken } from "src/tools/storage"
import { jwtDecode } from "jwt-decode"
import { getUsersSaga, normalizeUserData } from "src/modules/user/user.saga"
import { IAuthData } from "src/modules/signIn/signIn.types"

function* signInUserSaga({
  payload,
}: ReturnType<typeof signInBasicActions.signInUser>) {
  try {
    const {
      data: { user, accessToken },
    }: { data: IAuthData } = yield axiosInstance.post("/signIn", payload)
    if (user) {
      const normalizedUserData = normalizeUserData(user)
      yield put(
        signInBasicActions.signInUserSuccess({ user: normalizedUserData.user }),
      )
      setToken(accessToken)
      yield call(getUsersSaga)
    }
  } catch (e) {}
}

function* logoutUserSaga() {
  removeToken()
}

function* verifyUserSaga() {
  const token = getToken()

  if (token) {
    try {
      const data = jwtDecode<{ email: string; exp: number }>(token)
      if (data.email) {
        yield call(getUsersSaga)

        const users: ReturnType<typeof usersBasicSelectors.selectAll> =
          yield select(usersBasicSelectors.selectAll)
        const user = users.find(({ email }) => email === data.email)

        if (user) {
          yield put(signInBasicActions.signInUserSuccess({ user }))
          yield put(signInBasicActions.verifyFulfill())
        }
      }
    } catch (e) {
      yield put(signInBasicActions.logoutUser())
    }
  } else {
    yield put(signInBasicActions.verifyFulfill())
  }
}

export default function* signInSaga() {
  yield takeLatest(signInBasicActions.verifyUser, verifyUserSaga)
  yield takeLatest(signInBasicActions.signInUser, signInUserSaga)
  yield takeLatest(signInBasicActions.logoutUser, logoutUserSaga)
}
