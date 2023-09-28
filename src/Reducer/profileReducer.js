function profileReducer(state, action) {
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
    case "Add_Profile":
      return {
        ...state,
        profile: [...state.profile, action.payload],
      };

    case "ADD_CHART_DAT":
      return {
        ...state,
        chartDataFromAPI: [...state.chartDataFromAPI, action.payload],
      };
    default:
      return state;
  }
}

export { profileReducer };
