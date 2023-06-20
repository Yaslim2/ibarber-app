import { create } from 'zustand';

import { ConfirmPhoneNumberModalStoreModel } from './types';

const useConfirmPhoneNumberModalStore =
  create<ConfirmPhoneNumberModalStoreModel>(set => ({
    isModalVisible: false,
    isLoading: false,
    setIsLoading(isLoading: boolean): void {
      set({ isLoading });
    },
    setIsModalVisible(isModalVisible: boolean): void {
      set({ isModalVisible });
    },
  }));

export default useConfirmPhoneNumberModalStore;
