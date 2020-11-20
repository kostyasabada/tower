const CHANGE_LOADER = 'loader/CHANGE_LOADER';

export const changeLoader = (value) => ({
  type: CHANGE_LOADER,
  payload: value,
});

export const loadingReducer = (loader = false, action) => {
  switch (action.type) {
    case CHANGE_LOADER:
      return action.payload;
    default:
      return loader;
  }
};
