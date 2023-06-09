import { create } from 'zustand';

import { StepsStoreModel } from './types';

const useStepsStore = create<StepsStoreModel>((set, get) => ({
  stepPosition: 0,
  nextStepPosition() {
    const { stepPosition } = get();

    set({ stepPosition: stepPosition + 1 });
  },
  backStepPosition() {
    const { stepPosition } = get();

    set({ stepPosition: stepPosition - 1 });
  },
}));

export default useStepsStore;
