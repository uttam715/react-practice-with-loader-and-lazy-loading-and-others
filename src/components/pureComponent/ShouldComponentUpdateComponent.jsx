import { Component } from "react";

class ShouldComponentUpdateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.name !== this.state.name;
  }

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.setState({ name: "Uttam" });
              this.props.handleButtonClick();
            }}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            Try Re-render
          </button>

          {this.state.name}
        </div>
      </div>
    );
  }
}

export default ShouldComponentUpdateComponent;
