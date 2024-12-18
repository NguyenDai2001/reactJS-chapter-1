import react from "react";
import UserInfo from "./userInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends react.Component {



    render() {
        const myInfo = ["a", "b", "c"];
        return (
            <div>
                <UserInfo />
                <DisplayInfo name="Nguyen dai 123" age={23} myInfo={myInfo} />

            </div>
        )
    }
}

export default MyComponent;