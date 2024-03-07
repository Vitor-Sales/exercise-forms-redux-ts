import { PersonalInfo, ProfessionalInfo } from '../../types';

export const PERSONAL_INFO = 'PERSONAL_INFO';
export const PROFESSIONAL_INFO = 'PROFESSIONAL_INFO';

export const personalFormInfo = (payload: PersonalInfo) => ({
  type: PERSONAL_INFO,
  payload,
});

export const professionalInfoForm = (payload: ProfessionalInfo) => ({
  type: PROFESSIONAL_INFO,
  payload,
});
