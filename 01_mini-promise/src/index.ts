import { Executor, RejectType, ResolveType } from "./actionType";

class MiniPromise<T = any> {
	public resolve!: ResolveType;
	public reject!: RejectType;
	public status!: string;
	public resolve_executor_value!: any;
	public reject_executor_value!: any;

	constructor(executor: Executor) {
		// * 起始等待状态
		this.status = "pending";

		this.resolve = (value: any): any => {
			if (this.status === "pending") {
				this.status = "success";
				this.resolve_executor_value = value;
			}
		};

		this.reject = (value: any): any => {
			if (this.status === "pending") {
				this.status = "fail";
				this.reject_executor_value = value;
			}
		};

		executor(this.resolve, this.reject);
	}

	then(resolveInThen: ResolveType, rejectInThen: RejectType) {
		if (this.status === "success") {
			resolveInThen(this.resolve_executor_value);
		}

		if (this.status === "fail") {
			rejectInThen(this.reject_executor_value);
		}
	}
}

export default MiniPromise;
