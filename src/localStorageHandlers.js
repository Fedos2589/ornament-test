export const saveStateToLocalStorage = (state) => localStorage.setItem('reduxState', JSON.stringify(state));
export const getStateFromLocalStorage = () => JSON.parse(localStorage.getItem('reduxState'));
