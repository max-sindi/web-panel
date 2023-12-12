import { takeLatest, put, call, select } from "redux-saga/effects"
import { loginBasicActions } from "src/modules/login/login.slice"
import axiosInstance from "src/setup/axios"
import {IApiUser, usersBasicSelectors} from "src/modules/user/user.slice"
import {getToken, removeToken, setToken} from "src/tools/storage"
import {jwtDecode} from "jwt-decode"
import {getUsersSaga, normalizeUserData} from "src/modules/user/user.saga"

interface IAuthData {
  accessToken: string
  user: IApiUser
}

function* loginUserSaga({
  payload,
}: ReturnType<typeof loginBasicActions.loginUser>) {
  try {
    const {
      data: { user, accessToken },
    }: { data: IAuthData } = yield axiosInstance.post("/login", payload)
    if (user) {
      const normalizedUserData = normalizeUserData(user)
      yield put(loginBasicActions.loginUserSuccess({ user: normalizedUserData.user }))
      setToken(accessToken)
      yield call(getUsersSaga)
    }
  } catch (e) {}
}

function * logoutUserSaga () {
  removeToken()
}

function * verifyUser () {
  const token = getToken()

  if(token) {
    try {
      const data = jwtDecode<{ email: string, exp: number }>(token)
      if(data.email) {
        yield call(getUsersSaga)

        const users: ReturnType<typeof usersBasicSelectors.selectAll> = yield select(usersBasicSelectors.selectAll)
        const user = users.find(({ email }) => email === data.email)
        if(user) {
          yield put(loginBasicActions.loginUserSuccess({ user }))
        }
      }
    } catch (e) {
      yield put(loginBasicActions.logoutUser())
    }
  }
}

export default function* loginSaga() {
  yield call(verifyUser)
  yield takeLatest(loginBasicActions.loginUser, loginUserSaga)
  yield takeLatest(loginBasicActions.logoutUser, logoutUserSaga)
}
