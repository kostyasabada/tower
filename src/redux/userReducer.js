const LOAD_USERS = 'LOAD_USERS';

export const loadUsers = (users) => ({
  type: LOAD_USERS,
  payload: users,
});

export const getUsers = (state) => state;

export const userReducer = (users = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.payload;
    default:
      return users;
  }
};
