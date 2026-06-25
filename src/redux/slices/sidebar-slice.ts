import { createSlice } from "@reduxjs/toolkit";

export interface SidebarState {
  isCollapsed: boolean;
}

const initialState: SidebarState = {
  isCollapsed: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isCollapsed = !state.isCollapsed;
      console.log("de");
    },
    collapseSidebar: (state) => {
      state.isCollapsed = true;
    },
    expandSidebar: (state) => {
      state.isCollapsed = false;
    },
  },
});

export const { toggleSidebar, collapseSidebar, expandSidebar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
