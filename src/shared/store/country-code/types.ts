export interface CountryCodeStoreModel {
  countryCode: string;
  callingCode: string;
  changeCountryCode: (countryCode: string, callingCode: string) => void;
}
