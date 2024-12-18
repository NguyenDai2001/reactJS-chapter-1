import React from "react";

class DisplayInfo extends React.Component {
    render() {

        const { name, age, myInfo } = this.props;
        return (
            <div>
                My name: {name}
                my age: {age}
                obj: {myInfo[1]}
            </div>
        )
    }
}
export default DisplayInfo;