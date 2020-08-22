import { userSaga } from "./user/UserSaga";

export function* rootSaga() {
    yield [
        userSaga()
    ]
}