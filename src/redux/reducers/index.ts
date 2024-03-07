import { AnyAction } from 'redux';
import { PERSONAL_INFO, PROFESSIONAL_INFO } from '../actions';

const initialState = {
  personalData: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professionalData: {
    resume: '',
    role: '',
    description: '',
  },
};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case PERSONAL_INFO:
      return {
        ...state,
        personalData: action.payload,
      };
    case PROFESSIONAL_INFO:
      return {
        ...state,
        professionalData: action.payload,
      };
    default: return state;
  }
};
export default rootReducer;
