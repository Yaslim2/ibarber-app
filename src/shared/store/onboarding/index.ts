import AsyncStorage from '@react-native-async-storage/async-storage';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { OnboardingStoreModel } from './types';

const useOnboardingStore = create(
  persist<OnboardingStoreModel>(
    (set, get) => ({
      firstAccess: null,
      setAccess: (firstAccess: boolean): void => set({ firstAccess }),
      changeAccess: (): void => {
        set({
          firstAccess: !get().firstAccess,
        });
      },
      setHydrate: (val: boolean | null): void => set({ _hasHydrated: val }),
      _hasHydrated: false,
    }),
    {
      name: 'firstAccess-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (): void => {
        useOnboardingStore &&
          useOnboardingStore.setState({ _hasHydrated: true });
      },
    },
  ),
);

export default useOnboardingStore;
