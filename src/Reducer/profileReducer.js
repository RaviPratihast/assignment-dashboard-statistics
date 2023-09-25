function profileReducer(state, action) {
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
    case "Add_Profile":
      //   return [...state, action.payload];
      return [...state, action.payload];

    default:
      return state;
  }
}

export { profileReducer };
