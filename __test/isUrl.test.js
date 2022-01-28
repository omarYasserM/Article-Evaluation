import { isUrl } from "../src/client/js/isUrl";

test("www.google.com returns true", () => {
  expect(isUrl("www.google.com")).toBeTruthy;
});
