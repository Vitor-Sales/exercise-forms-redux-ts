export type PersonalInfo = {
  name: string,
  email: string,
  cpf: string,
  address: string,
  city: string,
  uf: string,
};

export type ProfessionalInfo = {
  resume: string,
  role: string,
  description: string,
};

export type RootState = {
  personalData: PersonalInfo,
  professionalData: ProfessionalInfo,
};
