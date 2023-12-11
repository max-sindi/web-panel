import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { all, call } from "redux-saga/effects"
import { userSaga } from "src/modules/user/user.saga"
import userReducer from "src/modules/user/user.slice"
import loginReducer from "src/modules/login/login.slice"
import friendReducer from "src/modules/friend/friend.slice"
import loginSaga from "src/modules/login/login.saga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { userReducer, friendReducer, loginReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

function* rootSaga() {
  yield all([call(userSaga), call(loginSaga)])
}

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
