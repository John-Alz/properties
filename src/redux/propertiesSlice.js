import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  properties: [],
  selectedCountry: "All",
  selectedType: "All",
  selectedHost: "All"
}

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    allProperties: (state, action) => {
      state.properties = action.payload
    },
    filterCountry: (state, action) => {
      state.selectedCountry = action.payload
      console.log(state.selectedCountry);
    },
    filterType: (state, action) => {
      state.selectedType = action.payload
      console.log(state.selectedType);
    },
    filterHost: (state, action) => {
      state.selectedHost = action.payload
      console.log(state.selectedHost);
    },
  },
})


// Action creators are generated for each case reducer function
export const { allProperties, filterCountry, filterType, filterHost } = propertiesSlice.actions

export default propertiesSlice.reducer