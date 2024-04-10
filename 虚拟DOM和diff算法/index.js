// 定义一个简单的React组件
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    // 点击按钮时，handleClick方法会更新组件的count状态。React会重新渲染整个MyComponent组件，并通过diff算法比较新旧虚拟DOM树的差异，然后只更新实际DOM中发生变化的部分
    handleClick() {
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={() => this.handleClick()}>Increment</button>
        </div>
      );
    }
  }
  
  // 渲染组件到页面上的根元素
  ReactDOM.render(<MyComponent />, document.getElementById('root'));
  