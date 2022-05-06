// API



//console.log(url);

              
const fetchUsers = () => {
  axios.get('https://api.openweathermap.org/data/2.5/weather?lat=43.651070&lon=-79.347015&appid=352221c9d016002fdf36073f8d4dda1d')
      .then(response => {
          const users = response;
          console.log(`GET list users`, users);
      })
      .catch(error => console.error(error));
};

fetchUsers();










