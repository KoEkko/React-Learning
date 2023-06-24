/* 
  封装一个对象的迭代方法：
    + 基于传统的for/in循环，会存在一些弊端「性能较差（既可以迭代私有的，也可以迭代公有的）；只能迭代“可枚举、非Symbol类型的”属性...」
    + 解决思路： 获取对象所有的私有属性 「私有的、不论是否可枚举、不论类型」
      + Object.getOwnPropertyNames(arr)  -> 获取对象非Symbol类型的私有属性 「无关是否可枚举」
      + Object.getOwnPropertySymbols(arr) -> 获取Symbol类型的私有属性
      获取所有的私有属性：
      let keys = Object.getOwnPropertyNames(arr).concat(Object.getOwnPropertySymbols(arr))
      可以基于ES6中的Reflect.ownKeys代替上述操作 「弊端：不兼容IE」
      let keys = Reflect.ownKeys(arr)
*/


const each = function(obj, callback) {
  if( obj === null || typeof obj !== 'object') throw new TypeError('obj is not a object')
  if(typeof callback !== 'function') throw new TypeError('callback is not a function')

  let keys = Reflect.ownKeys(obj)
  keys.forEach(key => {
    let value = obj[key]
    callback(value, key)
  })
}

// 例如：

// Array.prototype.BB = 200
let arr = [10, 20]
arr[Symbol('AA')] = 100

// let keys = Object.getOwnPropertyNames(arr).concat(Object.getOwnPropertySymbols(arr))
each(arr, (value,key) => {
  console.log(value, key);
})


export function createElement(ele, props, ...children) {
  let virtualDOM = {
    $$typeof: Symbol("react-element"),
    key: null,
    ref: null,
    type: null,
    props: {},
  };

  virtualDOM.type = ele;

  if (!props) {
    virtualDOM.props = {
      ...props,
    };
  }

  const len = children.length;

  if (len === 1) virtualDOM.props.children = children[0];
  if (len > 1) virtualDOM.props.children = children;
  return virtualDOM;
}
