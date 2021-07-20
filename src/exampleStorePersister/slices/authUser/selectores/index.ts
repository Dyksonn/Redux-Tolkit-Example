import { ReduxStore } from "../../../types";

export const selectUserName = (state: ReduxStore) => state.authUser.name;

export const selectUserAccessToken = (state: ReduxStore) => state.authUser.access_token;