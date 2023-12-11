import { takeLatest, put } from "redux-saga/effects"
import { loginBasicActions } from "src/modules/login/login.slice"
import axiosInstance from "src/config/axios"
import { IApiUser } from "src/modules/user/user.slice"
import { setToken } from "src/tools/storage"

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
      yield put(loginBasicActions.loginUserSuccess({ user }))
      setToken(accessToken)
    }
  } catch (e) {}
}

export default function* loginSaga() {
  yield takeLatest(loginBasicActions.loginUser, loginUserSaga)
}
