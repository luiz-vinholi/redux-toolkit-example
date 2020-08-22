import { call, takeLatest, put } from 'redux-saga/effects'
import { channel } from 'redux-saga'
import { UserDuck } from '../../ducks/user/UserDuck'

const fakeAsyncFunc = async () => {}

// Create channel to access returned value in component
// so you don't have to go through Redux Store
export const getUserChannel = channel<string>()
export async function getUser() {
    const { put } = getUserChannel
    await fakeAsyncFunc()

    put('Pimba')
}

export function* setUser() {
    yield call(fakeAsyncFunc)
}

export function* userSaga() {
    yield [
        takeLatest(
            UserDuck.actions.setUser.type,
            setUser
        )
    ]
}