import React from "react";
import ReactDOM from "react-dom/client";

import { createElement } from "./jsxHandle";

const root = ReactDOM.createRoot(document.getElementById("root"));


let data = [
  {
    id: 1,
    title: 'React 源码剖析'
  },
  {
    id: 2,
    title: 'React 项目之低代码平台'
  },
  {
    id: 3,
    title: 'React 项目之组件库'
  }
]

root.render(
  // <>
  //   {/* 控制元素的display样式：不论显示还是隐藏，元素本身都渲染出来了 */}
  //   <button style={{ display: flag ? 'block' : 'none'}}>按钮1</button>
  //   <br />

  //   {/* 控制元素渲染或者不渲染 */}
  //   { flag ? <button>按钮2</button> : null}
  // </>
  <>
    <h2 className="title">今日新闻</h2>
    <ul className="news-box">
      {data.map((item, index) => {
        // 循环创建的元素一定设置key属性，属性值是本次循环中的“唯一值”  「优化DOM-DIFF」  
        return <li key={item.id}>
          <em>{index}</em>
          &nbsp;&nbsp;
          <span>{item.title}</span>
        </li>
      })}
    </ul>

    <br />
      {/* 扩展需求：没有数组，就是想单独循环5次 */}
      {/* 为什么需要到fill呢，因为通过new Array传入的只有一个数字的话，就是长度为几的空数组，称为稀疏数组 */}
      {/* 数组的迭代中（foreach、map等）不能迭代稀疏数组，通过fill方法填充数组的每个元素 */}
      {new Array(5).fill(null).map((_,index) => {
        return <button key={index}>
          按钮{index + 1}
        </button>
      })}
      {createElement('button',null)}
  </>
);

