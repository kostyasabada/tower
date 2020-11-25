const SET_PAGE = 'page/SET_PAGE';

export const setCurrentPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const currentPageReducer = (page = 1, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
    default:
      return page;
  }
};
