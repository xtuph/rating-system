import { useContext, createContext, useReducer } from "react";

// variable to store everything
// this is where the previous ratings will be store
const defaultGlobalState = {
  ratings: []
};

const GlobalStoreContext = createContext(defaultGlobalState);

export const useGlobalStore = () => useContext(GlobalStoreContext);

export const GlobalStoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({...state, ...newValue}),
    defaultGlobalState
  );

  return (
    <GlobalStoreContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStoreContext.Provider>
  );
};
