import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// 最初のuser状態を定義
const initialState = {
  user: null,
  isFetching: false,
  roor: false,
};

//状態をグローバルに管理する
// createContext()はglobal contextを作り出すことができる。
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
