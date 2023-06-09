export interface OnboardingStoreModel {
  firstAccess: boolean | null;
  setAccess: (firstAccess: boolean) => void;
  changeAccess: () => void;
  _hasHydrated: boolean | null;
  setHydrate: (state: boolean | null) => void;
}
