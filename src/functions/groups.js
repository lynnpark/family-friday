import { shuffle } from "./shuffle"

/**
 * Takes an array of employee objects and returns an array of groups.
 * A group has 3-5 employee objects
 *
 * @param {Object[]} employees
 */
export function getGroups(employees) {
  if (!employees) return null;
  const employeesArr = shuffle(employees.slice(0));
  const groups = [];

  // Loops through and places the first 4 employee objects to a group.
  while (employeesArr.length) {
    let group = [];
    if (employeesArr.length === 5) group = employeesArr.splice(0, 5);
    //if there is 5 left, put all 5 in a group
    else if (employeesArr.length === 2)
      //if there is 2 left, take one from the previous group to create a group of 3
      group = [...employeesArr.splice(0, 2), groups[groups.length - 1].pop()];
    else group = employeesArr.splice(0, 4);
    groups.push(group);
  }

  return groups;
}
