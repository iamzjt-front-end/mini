# 01_mini-promise

### 1. Promise的三种状态

- `pending`: 等待状态，比如正在进行网络请求，或者定时器没有到时间
- `fulfilled`: 成功状态，比如网络请求成功了，或者定时器到时间了
- `rejected`: 失败状态，比如网络请求失败了，或者定时器没有到时间就被取消了

### 2. 状态特性：

一旦成功就不能失败，反过来也一样。

```js
const promise = new Promise((resolve, reject) => {
  reject('error')
  resolve('success')
})

promise.then((res) => {
  console.log('result: ', res)
}, (err) => {
  console.log('result: ', err)
})

// result: error
```

### 3. then 方法

每个promise都有一个then方法

### 4. 其他也执行reject的场景

正在执行 `resolve()` 的方法报错了，也进入 `reject` 失败状态
