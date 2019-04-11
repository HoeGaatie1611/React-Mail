import React from "react";
// core components
// sections for this page/view
import Soundboard from "./IndexSections/Soundboard";

class Sound extends React.Component {
    componentDidMount() {
        document.body.classList.toggle("index-page");
    }

    componentWillUnmount() {
        document.body.classList.toggle("index-page");
    }

    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="main">
                        <Soundboard/>
                    </div>
                </div>
            </>
        );
    }
}

export default Sound;
