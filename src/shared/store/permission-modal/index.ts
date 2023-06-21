import { create } from 'zustand';

import { PermissionModalStoreModel } from './types';

const usePermissionModalStore = create<PermissionModalStoreModel>(set => ({
  isModalVisible: false,
  setIsModalVisible(isModalVisible: boolean): void {
    set({ isModalVisible });
  },
}));

export default usePermissionModalStore;
