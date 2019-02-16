const { Component } = React;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  decrement() {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }
  render() {
    return (
      <div className="Counter">
        <p>
          <button onClick={() => this.increment()}>+1</button>
          Count: {this.state.count}
          <button onClick={() => this.decrement()}>-1</button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Counter />
  </div>,
  document.getElementById("root")
);
