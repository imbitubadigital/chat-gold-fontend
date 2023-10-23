import { UserProps } from '@/services/http/auth/types';
import { create } from 'zustand';

const INITIAL_DATA = {
  user: {} as UserProps,
  token: null,
  refreshToken: null,
};

export type StateDataProps = {
  user: UserProps;
  token: string | null;
  refreshToken: string | null;
};

type ActionProps = {
  settingUserDataStore: (data: StateDataProps) => void;
  settingLogoutStore: () => void;
};
type AuthStoreProps = {
  state: StateDataProps;
  actions: ActionProps;
};

export const useAuthStore = create<AuthStoreProps>((set) => ({
  state: INITIAL_DATA,
  actions: {
    settingUserDataStore: (data) =>
      set((store) => ({ state: { ...store.state, ...data } })),
    settingLogoutStore: () => set({ state: { ...INITIAL_DATA } }),
  },
}));
