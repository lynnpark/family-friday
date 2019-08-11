import { getGroups } from "./FamilyFriday";

const emps = [
  { name: "Happy" },
  { name: "Dopey" },
  { name: "Grumpy" },
  { name: "Sneezy" },
  { name: "Lynn" },
  { name: "Bashful" }
];

it("getEmployees", () => {
  let i = 100;
  while (i--) {
    emps.push({ name: "Test" });
    getGroups(emps).forEach(group => {
      expect(group.length).toBeGreaterThanOrEqual(3);
      expect(group.length).toBeLessThanOrEqual(5);
    });
  }
});
