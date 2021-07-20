import { ReduxStore } from "../../../types";

export const selectPushToken = (state: ReduxStore) => state.notifications.pushToken;

export const selectCountNotification = (state: ReduxStore) => state.notifications.countNotifications;