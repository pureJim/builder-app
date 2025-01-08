/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import StoreConstants from '../constants';

const userInitialState: SystemStore.IUserState = {
  token: 'placeholder',
  isLogin: false,
  user: undefined,
  auth: {},
};

const useUserStore = create(
  persist(
    immer<SystemStore.IUserState & SystemStore.IUserActions>((set) => ({
      ...userInitialState,
      setIsLogin: (isLogin: boolean) =>
        set((state) => {
          state.isLogin = isLogin;
        }),
      setToken: (token: string) =>
        set((state) => {
          state.token = token;
        }),
      setUser: (user: SystemStore.TUser) =>
        set((state) => {
          state.user = user;
        }),
      setAuth: (auth: SystemStore.TAuth) =>
        set((state) => {
          state.auth = auth;
        }),
      reset: () => {
        set(userInitialState);
      },
    })),
    {
      name: StoreConstants.USER_STORE,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useUserStore;
