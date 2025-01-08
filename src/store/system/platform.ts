/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import StoreConstants from '../constants';

const platformInitialState: SystemStore.IPlatformState = {
  lang: 'zh-CN',
  collapse: false,
  breadcrumbList: [],
  isShowHeader: true,
  stepState: {
    current: 0,
    stepList: [],
  },
};

const usePlatformStore = create(
  persist(
    immer<SystemStore.IPlatformState & SystemStore.IPlatformActions>((set) => ({
      ...platformInitialState,
      setIsShowHeader: (isShowHeader) => {
        set((state) => {
          state.isShowHeader = isShowHeader;
        });
      },
      setLang: (lang) => {
        set((state) => {
          state.lang = lang;
        });
      },
      setBreadcrumb: (breadcrumbList) => {
        set((state) => {
          state.breadcrumbList = breadcrumbList;
        });
      },
      setStepState: (stepState) =>
        set((state) => {
          state.stepState = stepState;
        }),
      setCollapse: (collapse) => {
        set((state) => {
          state.collapse = collapse;
        });
      },
      reset: () => {
        set(platformInitialState);
      },
    })),
    {
      name: StoreConstants.PLATFORM_SYSTEM_STORE,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default usePlatformStore;
