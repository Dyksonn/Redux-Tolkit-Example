import { ReduxStore } from "../../../types";

export const selectCurrentIndexTab = (state: ReduxStore) => state.customTab.currentIndexTab;