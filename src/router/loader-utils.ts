import { useUserStore } from '@/store/system';

export const isAuthenticated = () => {
  return false;
  return useUserStore.getState().token !== '';
};

export const isTest = () => {};
