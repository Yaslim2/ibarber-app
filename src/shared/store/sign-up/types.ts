export interface SignUpStoreModel {
  fullname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phoneNumber: string;
  urlImage: string;
  updateField: (params: {
    fullname?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
    phoneNumber?: string;
    urlImage?: string;
  }) => void;
}
