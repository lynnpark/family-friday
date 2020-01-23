import { shuffle } from "./shuffle"

describe("shuffle", () => {
  test("Has evenly distributed output", () => {
    // This is a statistical test that runs shuffle N times (N = `iterations`)
    // and looks at the results in aggregate.
    const iterations = 10000;
    const tolerance = 0.05;
    const lowerBound = Math.floor(iterations / 3 * (1 - tolerance));
    const upperBound = Math.ceil(iterations / 3 * (1 + tolerance));

    const baseArray = ["a", "b", "c"];

    // Maintain a count of the number of times each array element appears at
    // each index after shuffling. E.g. counts["a"][0] reflects the number of
    // times the element "a" appeared at index 0 after the array was shuffled.
    let counts = {
      "a": [0, 0, 0],
      "b": [0, 0, 0],
      "c": [0, 0, 0]
    };

    // Shuffle the array a bunch of times and count how many times each element
    // appears at each index.
    for (let iters = 0; iters < iterations; iters++) {
      shuffle(baseArray.slice(0)).forEach((element, index) => {
        counts[element][index]++;
      });
    }

    for (const element in counts) {
      let total = 0;
      counts[element].forEach((count) => {
        expect(count).toBeGreaterThan(lowerBound);
        expect(count).toBeLessThan(upperBound);
        total += count;
      });

      // Ensure that the element showed up the correct number of times
      expect(total).toEqual(iterations);
    }
  });
});
