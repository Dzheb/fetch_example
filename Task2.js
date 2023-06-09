const user = {
  name: 'John Smith',
  age: 30,
  email: 'john@example.com',
};
const saveUserData = async (user) => {
  url = 'https://api.github.com/users';
  const response = await fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((response) => {
    if (response.status === 200) {
      return response;
    } else {
      throw new Error('Not saved');
    }
  });
};
const response = saveUserData(user)
  .then((response) => {
    if ((response.status = 'ok')) {
      console.log('User data saved successfully');
    }
  })
  .catch((error) => {
    console.log(error.message);
  });
