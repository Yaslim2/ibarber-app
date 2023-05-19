import AsyncStorage from '@react-native-async-storage/async-storage';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { ThemeStoreModel, ThemesEnum } from './types';

const useThemeStore = create(
  persist<ThemeStoreModel>(
    (set, get) => ({
      theme: null,
      getTheme: (): ThemesEnum | null => get().theme,
      setTheme: (theme: ThemesEnum): void => set({ theme }),
      changeTheme: (): void => {
        const { theme: currentTheme } = get();
        const newTheme =
          currentTheme === ThemesEnum.dark ? ThemesEnum.light : ThemesEnum.dark;

        set({ theme: newTheme });
      },
    }),
    {
      name: 'theme-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useThemeStore;
