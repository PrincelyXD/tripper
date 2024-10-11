export interface FileData {
  [Key: string]: string;
}
export interface StateObject {
  name: string;
  state_code: string;
}

export interface CountryDataFormat {
  name: string;
  iso: string;
  iso2: string;
  states: StateObject[];
}

export interface FormDataFormat {
  vehicleIdentificationNumber: string;
  fullName: string;
  state: string;
  localGovernment: string;
  dateOfBirth: string;
}
export interface DriverLicenseFormDataFormat {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  state: string;
  localGovernment: string;
  bloodGroup: string;
  vehicleClass: string;
  issueDate: string;
  expiryDate: string;
   
}


export interface FileInputProps {
  inputName: string;
  label: string;
  inputDataFormat: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getFileName: (fileName: string) => string;
}

export interface TextInputProps {
  inputName: string;
  inputType: string;
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeHolderText: string;
}

export interface SelectInputProps {
  inputName: string;
  label: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: StateObject[];
}


export interface SelectInput2Props {
  inputName: string;
  label: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}
