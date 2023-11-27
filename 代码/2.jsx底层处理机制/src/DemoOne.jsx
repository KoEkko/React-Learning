export const DemoOne = function(props) {
  let {title, x} = props
  return <div x={x}>
    <p>{title}</p>
  </div>
}

// 通过把函数当作对象，设置静态的私有属性方法，来给其设置属性的校验规则  
DemoOne.defineProps = {
  x:0
}



