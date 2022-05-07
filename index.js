// API key is git hidden in another js file as var api



let user = "";
              
const fetchUsers = () => {
  axios.get(api)
      .then(response => {
          const users = response.data;

          console.log(`GET list users`, users);
          let mainTemp = users.main.temp;
          let name = users.name;
          // Gets name, and temperature in kelvin
            console.log(name, mainTemp);

          
          
         
      })
      .catch(error => console.error(error));
};

fetchUsers();



















