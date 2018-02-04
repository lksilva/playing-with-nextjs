import { COMPANIES_REQUEST, COMPANIES_SUCCESS } from '../constants/Types';


export const getCompanies = () => {
  return async (dispacth, getState) => {
    dispacth(requestCompanies());
    setTimeout(() => {
      dispacth(receiveCompanies())
    }, 3000);
  }
}

export const requestCompanies = (user) => {
  return {
    type: COMPANIES_REQUEST,
    isFetching: true,
    user
  }
}

export const receiveCompanies = () => {
  return {
    type: COMPANIES_SUCCESS,
    isFetching: false,
  }
}