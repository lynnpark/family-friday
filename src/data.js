const data = [
  { name: "Happy" },
  { name: "Dopey" },
  { name: "Grumpy" },
  { name: "Sneezy" },
  { name: "Lynn" },
  { name: "Bashful" },
  { name: "Sleepy" },
  { name: "Doc" },
  { name: "Brian" },
  { name: "Bob" }
];

// mimics an api call by returning data after a random delay
function getEmployees() {
  // get a random timeout value b/w 0.1s and 2s
  //const timeout = Math.floor(Math.random() * (2000 - 100)) + 100;
  //setTimeout(() => data, timeout);
  return data;
}

export { getEmployees };
