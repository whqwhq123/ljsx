const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class MyPromise {
  constructor(fn) {
    this.state = PENDING;
    this.value = null; //保存resolve或reject中传入的值
    this.resolvedCallBacks = [];
    this.rejectedCallbacks = [];
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    //执行fn函数
    try {
      fn(this.resolve, this.reject); //执行函数之后，将回调函数传入
    } catch (e) {
      this.reject(e);
    }
  }

  resolve(value) {
    //只有等待状态才能更改状态
    if (this.state === PENDING) {
      this.state = RESOLVED;
      this.value = value;
      //把存在调用栈里的then方法中的回调函数调用一下
      this.resolvedCallBacks.map((cb) => cb(this.value));
    }
  }

  reject(value) {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.value = value;
      this.rejectedCallbacks.map((cb) => cb(this.value));
    }
  }

  then(onFulfilled, onRejected) {
    //确保都转化为函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v;
    onRejected = typeof onRejected === 'function' ? onRejected : (err) => {
      throw err
    };
    switch (this.state) {
      case PENDING:
        this.resolvedCallBacks.push(onFulfilled);
        this.rejectedCallbacks.push(onRejected);
        break;
      case RESOLVED:
        //执行回调函数
        onFulfilled(this.value);
        break;
      case REJECTED:
        onRejected(this.value);
        break;
      default:
        throw 'unknown state';

    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello world')
  }, 100)
});

promise.then((value) => {
  console.log(value)
});



