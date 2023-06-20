export interface ConfirmPhoneNumberModalProps {
  confirmPhoneNumber: () => Promise<void>;
  isLoading: boolean;
  phoneNumber: string;
}
