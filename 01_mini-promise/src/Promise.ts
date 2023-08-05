import { Executor, ResolveType, RejectType } from "./actionType";

class Promise<T = any> {
  public resolve!: ResolveType;
  public reject!: RejectType;

  constructor(executor: Executor) {
    this.resolve = (value: any): any => {};
    this.reject = (value: any): any => {};

    executor(this.resolve, this.reject);
  }
}

export default Promise;
