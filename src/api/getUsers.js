export const getUsers = async () => {
  const users = await fetch(`${process.env.PUBLIC_URL}/api/users.json`)
    .then((res) => res.json())
    .then((data) => data.users);

  console.log(users);
};
