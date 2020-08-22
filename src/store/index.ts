import { configureStore } from '@reduxjs/toolkit'
import { UserDuck } from './ducks/user/UserDuck'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        user: UserDuck.reducer
    },
    middleware: getDefaultMiddleware => 
        [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

export { store }