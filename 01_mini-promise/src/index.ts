import { Executor, ResolveType, RejectType } from "./actionType";

class MiniPromise<T = any> {
  public resolve!: ResolveType;
  public reject!: RejectType;
  public status!: string;

  constructor(executor: Executor) {
    // * 起始等待状态
    this.status = "pending";

    this.resolve = (value: any): any => {
      this.status = "success";
      console.log("resolve==>value:", value);
    };

    this.reject = (value: any): any => {
      this.status = "fail";
      console.log("reject==>value:", value);
    };

    executor(this.resolve, this.reject);
  }
}

export default MiniPromise;
