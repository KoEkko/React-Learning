import React,{ useState} from "react";


const demo1 = function Demo (props) {
  // 我们需要把基于属性传递进来的x/y，经过其他处理的结果作为初始值
  let { x, y } = props;
  let  all = x + y;
  let  [num, setNum] = useState(all)
  const handler = () => {
    setNum(100)
  }
  return <div>
    <span>{num}</span>
    <button onClick={handler}>按钮</button>
  </div>
}

export default demo1