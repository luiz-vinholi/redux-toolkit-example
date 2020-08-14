import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState, TypesEnum, IUserPayload } from "./UserDuckTypes";

const INITIAL_STATE: IUserInitialState = {
    name: 'Luiz Vinholi'
}

const setUserReducer = (
    state: IUserInitialState,
    { payload }: PayloadAction<IUserPayload>
) => (state = payload)

export const UserDuck = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        [TypesEnum.SET_USER]: setUserReducer
    }
})