import axios from "axios";

const instance = axios.create({
  timeout: 30000
});

const endpoint = `https://moored-shark.glitch.me/`;

export function getEmployees() {
  return instance
    .get(endpoint)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

export function postEmployee(employee) {
  if (!employee.name.length) return;
  const params = new URLSearchParams();
  params.append("name", employee.name);
  return instance
    .post(endpoint, params, {
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error.response.data);
    });
}

export function resetEmployees() {
  const resetEndpoint = endpoint + "/reset";
  return instance
    .get(resetEndpoint)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
