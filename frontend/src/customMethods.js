export const setUserDetails = (valueObj) => {
  localStorage.setItem('userDetails', JSON.stringify(valueObj));
};

export const getUserDetails = () => {
  return localStorage.getItem('userDetails');
};

export const removeUserDetails = () => {
  localStorage.removeItem('userDetails');
};
