export interface StepsStoreModel {
  stepPosition: number;
  nextStepPosition: () => void;
  backStepPosition: () => void;
  resetStepPosition: () => void;
}
