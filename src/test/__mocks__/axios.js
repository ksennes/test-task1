export default {
  post: jest.fn(() => Promise.resolve({ data: "mocked" })),
  get: jest.fn(() => Promise.resolve({ data: "mocked" }))
};
