import { create } from 'zustand';

import { CountryCodeStoreModel } from './types';

const useCountryCodeStore = create<CountryCodeStoreModel>(set => ({
  countryCode: 'BR',
  callingCode: '55',
  changeCountryCode(countryCode, callingCode) {
    set({ countryCode, callingCode });
  },
}));

export default useCountryCodeStore;
