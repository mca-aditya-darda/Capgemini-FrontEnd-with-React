const { sum, divide, fetchUser, fetchFromAPI } = require("./script");
const axios = require("axios");

jest.mock("axios");

test("Testing the Sum Function", () => {
  expect(sum(10, 10)).toBe(20);
});

test("Array contains banana", () => {
  const arr = ["mango", "orange", "banana"];
  expect(arr).toContain("banana");
});

test("Object match", () => {
  expect({ name: "Prajwal" }).toEqual({ name: "Prajwal" });
});

test("Throws error when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Division by Zero");
});

test("Rejects if no ID", async () => {
  await expect(fetchUser()).rejects.toBe("ID is not matching");
});

test("Returns user with ID", async () => {
  await expect(fetchUser(1)).resolves.toEqual({
    id: 1,
    name: "Prajwal",
  });
});

test("Mock API call", async () => {
  axios.get.mockResolvedValue({ data: "USER" });
  const data = await fetchFromAPI();
  expect(data).toBe("USER");
});

const math = {
  sum: (a, b) => a + b,
};

test("Spy example", () => {
  const spy = jest.spyOn(math, "sum");
  math.sum(2, 3);
  expect(spy).toHaveBeenCalled();
});
