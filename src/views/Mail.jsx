import React from "react";
// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.jsx";
// sections for this page/view
import Tabs from "./IndexSections/MailApplication.jsx";

class Index extends React.Component {
    componentDidMount() {
        document.body.classList.toggle("index-page");
    }

    componentWillUnmount() {
        document.body.classList.toggle("index-page");
    }

    render() {
        return (
            <>
                <IndexNavbar/>
                <div className="wrapper">
                    <div className="main">
                        <Tabs/>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
