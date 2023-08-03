// * resolve 回调函数类型
type ResolveType = (value?: any) => void;

// * reject 回调函数类型
type RejectType = (value?: any) => void;

// * Promise 回调函数类型
type PromiseCallbackType = (resolve: ResolveType, reject: RejectType) => void;

export { ResolveType, RejectType, PromiseCallbackType };
