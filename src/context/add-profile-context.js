import { createContext, useContext, useReducer } from "react";
import { profileReducer } from "../Reducer/profileReducer";
const ProfileContext = createContext(null);

const useProfile = () => useContext(ProfileContext);

let initialState = {
  profile: [],
  chartDataFromAPI: [],
};

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileProvider, useProfile };
