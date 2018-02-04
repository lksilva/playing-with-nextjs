import { COMPANY_REQUEST, COMPANY_SUCCESS, COMPANY_FAILURE } from '../constants/Types';
import { AllPropertiesFilled } from '../utils/helpers';

export const saveCompany = (company) => {
  return async (dispacth) => {
    dispacth(requestCompany());
    const isValid = await AllPropertiesFilled(company);
    if(isValid) {
      setTimeout(() => {
        dispacth(receiveCompany(company))
      }, 3000);
    } else {
      setTimeout(() => {
        dispacth(companyError('Preencha os campos com dados válidos'))
      }, 3000);
    }
  }
}

export const requestCompany = () => {
  return {
    type: COMPANY_REQUEST,
    isFetching: true,
  }
}

export const receiveCompany = (company) => {
  return {
    type: COMPANY_SUCCESS,
    isFetching: false,
    company
  }
}

export const companyError = (message) => {
  return {
    type: COMPANY_FAILURE,
    isFetching: false,
    message
  }
}