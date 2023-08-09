import { expect } from "vitest";
import MiniPromise from "./index";

describe("01_mini-promise", () => {
  it("resolve should be called", () => {
    const spy = vi.spyOn(global.console, "log");

    new MiniPromise((resolve, reject) => {
      resolve("success");
    });

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("success");
    // expect(spy.mock.calls).toContainEqual(["success"]);
  });

  it("reject should be called", () => {
    const spy = vi.spyOn(global.console, "log");

    new MiniPromise((resolve, reject) => {
      reject("fail");
    });

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("fail");
  })
});
