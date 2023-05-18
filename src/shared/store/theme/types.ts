export enum ThemesEnum {
  dark = 'dark',
  light = 'light',
}

export interface ThemeStoreModel {
  getTheme: () => ThemesEnum | null;
  setTheme: (name: ThemesEnum) => void;
  changeTheme: () => void;
  theme: ThemesEnum | null;
}
