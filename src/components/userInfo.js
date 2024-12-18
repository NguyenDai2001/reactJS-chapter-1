import React from "react";

class UserInfo extends React.Component {
    state = {
        name: "",
        age: 22,
        value: ""
    }
    handle(event) {

        this.setState({ name: event.target.value })

    }

    handleOnSubmit(event) {
        event.preventDefault()
        console.log("checK: ", event)

    }

    render() {

        return (
            <div>
                mmama: {this.state.name}
                <h2>age: {this.state.age}</h2>

                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input onChange={(event) => { this.handle(event) }} type="text" value={this.state.name} />
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default UserInfo;