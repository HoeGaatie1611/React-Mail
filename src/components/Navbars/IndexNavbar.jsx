import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    Col,
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    Row,
    UncontrolledDropdown
} from "reactstrap";

class ComponentsNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapseOpen: false,
            color: "navbar-transparent",
            user: "",
            firstTime: true
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.changeColor);
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const gebruiker = parseInt(params.get('user'));
        console.log(gebruiker);
        if (gebruiker === 1)
            this.setState({user: "Jeremiah"}, function () {
                console.log(this.state.user);
            });
        else if (gebruiker === 2)
            this.setState({user: "Peter"}, function () {
                console.log(this.state.user);
            });
        else if (gebruiker === 3)
            this.setState({user: "Ian"}, function () {
                console.log(this.state.user);
            });
        else if (gebruiker === 4)
            this.setState({user: "Jesse"}, function () {
                console.log(this.state.user);
            });
    }

    getUser() {
        if(this.state.firstTime) {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const gebruiker = params.get('user');
            console.log(gebruiker);
            if (gebruiker === 1)
                this.setState({user: "Jeremiah"});
            else if (gebruiker === 2)
                this.setState({user: "Peter"});
            else if (gebruiker === 3)
                this.setState({user: "Ian"});
            else if (gebruiker === 4)
                this.setState({user: "Jesse"});
            return gebruiker;
        } else {
            return this.state.user;
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.changeColor);
    }

    changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            this.setState({
                color: "bg-info"
            });
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        ) {
            this.setState({
                color: "navbar-transparent"
            });
        }
    };
    toggleCollapse = () => {
        document.documentElement.classList.toggle("nav-open");
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };
    onCollapseExiting = () => {
        this.setState({
            collapseOut: "collapsing-out"
        });
    };
    onCollapseExited = () => {
        this.setState({
            collapseOut: ""
        });
    };

    render() {
        return (
            <Navbar
                className={"fixed-top " + this.state.color}
                color-on-scroll="100"
                expand="lg"
            >
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                            data-placement="bottom"
                            to="/mail"
                            rel="noopener noreferrer"
                            title="Designed and Coded by Creative Tim"
                            tag={Link}
                        >
                            <span>Visible Partners • </span>
                            Automatic Mail System & Data Grabber
                        </NavbarBrand>
                        <button
                            aria-expanded={this.state.collapseOpen}
                            className="navbar-toggler navbar-toggler"
                            onClick={this.toggleCollapse}
                        >
                            <span className="navbar-toggler-bar bar1"/>
                            <span className="navbar-toggler-bar bar2"/>
                            <span className="navbar-toggler-bar bar3"/>
                        </button>
                    </div>
                    <Collapse
                        className={"justify-content-end " + this.state.collapseOut}
                        navbar
                        isOpen={this.state.collapseOpen}
                        onExiting={this.onCollapseExiting}
                        onExited={this.onCollapseExited}
                    >
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        BLK•React
                                    </a>
                                </Col>
                                <Col className="collapse-close text-right" xs="6">
                                    <button
                                        aria-expanded={this.state.collapseOpen}
                                        className="navbar-toggler"
                                        onClick={this.toggleCollapse}
                                    >
                                        <i className="tim-icons icon-simple-remove"/>
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav navbar>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    data-toggle="dropdown"
                                    href="#pablo"
                                    nav
                                    onClick={e => e.preventDefault()}
                                >
                                    <i className="fa fa-cogs d-lg-none d-xl-none"/>
                                    Selecteer Gebruiker ({this.state.user})
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-with-icons">
                                    <DropdownItem tag={Link} to="/mail?user=1" onClick={() => {this.setState({user: "Jeremiah"})}}>
                                        <i className="tim-icons icon-single-02"/>
                                        Jeremiah Kouwenberg
                                    </DropdownItem>
                                    <DropdownItem tag={Link} to="/mail?user=2" onClick={() => this.setState({user: "Peter"})}>
                                        <i className="tim-icons icon-single-02"/>
                                        Peter Poortinga
                                    </DropdownItem>
                                    <DropdownItem tag={Link} to="/mail?user=3" onClick={() => this.setState({user: "Ian"})}>
                                        <i className="tim-icons icon-single-02"/>
                                        Ian Forman
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default ComponentsNavbar;
