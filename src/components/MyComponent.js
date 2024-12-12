import react from "react";

class MyComponent extends react.Component {
    state = {
        name: "Nguyen Dai",
        age: 22
    }
    render() {
        return (
            <div>
                mmama: {this.state.name}
            </div>
        )
    }
}

export default MyComponent;