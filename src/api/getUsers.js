export const getUsersFromServer = async () => {
  const users = await fetch(`${process.env.PUBLIC_URL}/api/users.json`)
    .then((res) => res.json())
    .then((data) => data.users);

  return users;
};
