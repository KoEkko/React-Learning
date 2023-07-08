import React from "react";
import { flushSync } from 'react-dom'

class Demo1 extends React.Component {
  state = {
    x: 0
  };
  handler = () => {
    // for(let i = 0; i < 20; i++) {
    //   this.setState({
    //     x: this.state.x + 1
    //   })
    // }
    for(let i = 0; i < 20 ; i++) {
      this.setState((prevState) => {
        return {
          x: prevState.x + 1
        }
      })
    }
  }
  render() {
    console.log(`视图渲染RENDER`);
    let { x } = this.state
    return <div>
      x:{x}
      <br />
      <button onClick={this.handler}>按钮</button>
    </div>
  }
}

export default Demo1