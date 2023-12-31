import { expect } from "vitest";
import MiniPromise from "./index";

describe("01_mini-promise", () => {
	it("resolve should be called", () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const p = new MiniPromise((resolve, reject) => {
			resolve("success");
		});

		expect(p.status).toBe("success");
	});

	it("reject should be called", () => {
		const p = new MiniPromise((resolve, reject) => {
			reject("fail");
		});

		expect(p.status).toBe("fail");
	});

	it("after resolved, reject should not be called", () => {
		const p = new MiniPromise((resolve, reject) => {
			resolve("success");
			reject("fail");
		});

		expect(p.status).toBe("success");
	});

	it("after rejected, resolve should not be called", () => {
		const p = new MiniPromise((resolve, reject) => {
			reject("fail");
			resolve("success");
		});

		expect(p.status).toBe("fail");
	});

	it("then resolveRes should be get", () => {
		const p = new MiniPromise((resolve, reject) => {
			resolve("success");
		});

		p.then(
			resolveRes => {
				expect(resolveRes).toBe("success");
			},
			rejectRes => {},
		);
	});

	it("then rejectRes should be get", () => {
		const p = new MiniPromise((resolve, reject) => {
			reject("fail");
		});

		p.then(
			resolveRes => {},
			rejectRes => {
				expect(rejectRes).toBe("fail");
			},
		);
	});

	it("execute failed should call reject", () => {
		const p = new MiniPromise((resolve, reject) => {
			throw new Error("execute failed");
		});

		expect(p.status).toBe("fail");
	});
});
