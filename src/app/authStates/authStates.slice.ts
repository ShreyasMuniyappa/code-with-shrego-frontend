import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { AuthStates } from "./authStates.types"
import { User } from "firebase/auth"

const initialState: AuthStates = {
	user: null,
}

export const authSlice = createSlice({
	name: "authStates",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<null | User>) => {
			state.user = action.payload;
		},
	},
})


export const { setUser } = authSlice.actions

export default authSlice.reducer


