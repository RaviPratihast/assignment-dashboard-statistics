function profileReducer(state, action) {
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
    case "Add_Profile":
      return {
        ...state,
        profile: [...state.profile, action.payload],
      };
    // case "Add_Data_From_API":

    default:
      return state;
  }
}

export { profileReducer };
