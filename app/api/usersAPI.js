/* global fetch */

const usersAPI = {
  getUsers(pageNumber) {
    const url = `https://reqres.in/api/users?page=${pageNumber}`;
    return fetch(url).then(response => response.json()).catch(error => console.error(error));
  },
};

export default usersAPI;
