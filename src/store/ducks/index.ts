import { configureStore } from '@reduxjs/toolkit'
import { UserDuck } from './user/UserDuck'

const store = configureStore({
    reducer: {
        user: UserDuck.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

export { store }