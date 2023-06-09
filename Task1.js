async function getUserData(idsearch) {
  url = 'https://api.github.com/users';
  console.log(url);
  const response = await fetch(url)
    .then(async (response) => {
      let index;
      if (response.ok) {
        const answer = await response.json().then((answer) => {
          index = answer.findIndex((p) => p.id == idsearch);
          if (index < 0)
            console.log(
              `Ошибка - пользователь с таким id = ${idsearch} не найден`
            );
          else console.log(answer[index]);
        });
      } else console.log(`Ошибка -  неправильный запрос`);
    })
    .catch((error) => {
      console.log('Произошла ошибка:');
      console.log(error.message);
    });
}
getUserData('10');
