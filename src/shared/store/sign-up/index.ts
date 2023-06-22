import { create } from 'zustand';

import { SignUpStoreModel } from './types';

const useSignUpStore = create<SignUpStoreModel>((set, get) => ({
  fullname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  phoneNumber: '',
  urlImage: '',
  updateField(params) {
    const {
      fullname,
      email,
      password,
      passwordConfirmation,
      phoneNumber,
      urlImage,
    } = get();

    set({
      fullname: params.fullname || fullname,
      email: params.email || email,
      password: params.password || password,
      passwordConfirmation: params.passwordConfirmation || passwordConfirmation,
      phoneNumber: params.phoneNumber || phoneNumber,
      urlImage: params.urlImage || urlImage,
    });
  },
}));

export default useSignUpStore;
