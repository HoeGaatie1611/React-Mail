import React from "react";
import classnames from "classnames";
import {getEmails, getText, sendMail} from "../../components/Functions/Functions.jsx"
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    FormGroup,
    Input,
    Label,
    Modal,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";


class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconTabs: 1,
            textTabs: 4,
            domain: null,
            email: "",
            URL: "",
            information: null,
            bevestigingsModal: false,
            show: false,
            exampleRadios: 1,
            user: 1,
            artikelType: "option1",
            modalText: <div><p> Goedendag, </p>

                <p>Zou het voor ons mogelijk zijn om een soortgelijk artikel met links op jullie site te plaatsen als
                    dit volgende artikel? </p>

                <p><a href="Http://google.com">De URL is nog leeg</a></p>

                <p>Ik hoor het graag!</p>

                <p>Met vriendelijke groet,</p>

                <p>Jeremiah</p>
            </div>
        };
    };

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.appendInformation();
        }
    };

    toggleLoading = () => {
        this.setState({
            ["show"]: !this.state["show"]
        })
    };

    toggleModal = async () => {
        this.setState({
            modalText: await getText(this.state.artikelType, this.state.URL),
            bevestigingsModal: !this.state["bevestigingsModal"]
        });
    };

    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };

    setDomain = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        });
        console.log(this.state);
    };

    handleText = (event) => {
        this.setState({
            modalText: event.target.value
        })
    }

    sendEmail = () => {
        console.log("Email being sent...");
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let user = params.get('user');
        console.log(user);
        sendMail(user, this.state.email, this.state.URL)
    };

    handleOptionChange = (event) => {
        this.setState({
            ["artikelType"]: event.currentTarget.value,
        })
    };

    appendInformation = async () => {
        if (this.state.domain !== null) {
            this.toggleLoading();
            this.setState({
                ["information"]: null,
                ["URL"]: this.state.domain
            });
            this.setState({
                ["information"]: await getEmails(this.state.domain, this.state.iconTabs)
            });
        } else {
            alert(
                "Vul een URL in"
            )
        }
    };

    componentDidUpdate() {
        if (this.state.information !== null && this.state.show === true)
            this.setState({
                ["show"]: false
            })

    };

    render() {
        return (
            <div className="section section-tabs">
                <div className="squares square1"/>
                <div className="squares square2"/>
                <div className="squares square3"/>
                <div className="squares square4"/>
                <div className="squares square5"/>
                <div className="squares square8"/>
                <Container>
                    <div className="title">
                        <h3 className="mb-3">Mail Applicatie voor Visible Parnters Ltd.</h3>
                    </div>
                    <Row>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <div className="mb-3">
                                <small className="text-uppercase font-weight-bold">
                                    Domeininformatie ophalen
                                </small>
                            </div>
                            <Card>
                                <CardHeader>
                                    <Nav className="nav-tabs-info" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs === 1
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-square-pin"/>
                                                .NL - Domein
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs === 2
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-world"/>
                                                .COM - Domein
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.iconTabs === 3
                                                })}
                                                onClick={e => this.toggleTabs(e, "iconTabs", 3)}
                                                href="#pablo"
                                            >
                                                <i className="tim-icons icon-spaceship"/>
                                                .EU - Domein
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="tab-space"
                                        activeTab={"link" + this.state.iconTabs}
                                    >
                                        <TabPane tabId="link1">
                                            <FormGroup>
                                                <h4>Vul hier het (NL) domein in </h4>
                                                <Input defaultValue="" onChange={this.setDomain} id={"domain"}
                                                       value={this.state.domain} onKeyPress={this._handleKeyPress}
                                                       placeholder="Het .nl domein"
                                                       type="url"/>
                                                <h4/>
                                                <Button color="primary" onClick={this.appendInformation}>Vraag gegevens
                                                    op</Button>
                                            </FormGroup>
                                        </TabPane>
                                        <TabPane tabId="link2">
                                            <FormGroup>
                                                <h4>Vul hier het (COM) domein in </h4>
                                                <Input defaultValue="" onChange={this.setDomain} id={"domain"}
                                                       value={this.state.domain} onKeyPress={this._handleKeyPress}
                                                       placeholder="Het .com domein" type="url"/>
                                                <h4/>
                                                <Button color="primary" onClick={this.appendInformation}>Vraag gegevens
                                                    op</Button>
                                            </FormGroup>
                                        </TabPane>
                                        <TabPane tabId="link3">
                                            <FormGroup>
                                                <h4>Vul hier het (EU) domein in </h4>
                                                <Input defaultValue="" onChange={this.setDomain} id={"domain"}
                                                       value={this.state.domain} placeholder="Het .EU domein"
                                                       type="url"/>
                                                <h4/>
                                                <Button color="primary">Vraag gegevens op</Button>
                                            </FormGroup>
                                        </TabPane>
                                        <Loading
                                            show={this.state.show}
                                            color="white"
                                        />
                                        <p>
                                            {this.state.information}
                                        </p>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <div className="mb-3">
                                <small className="text-uppercase font-weight-bold">
                                    Verstuur email
                                </small>
                            </div>
                            <Card>
                                <CardHeader>
                                    <Nav className="nav-tabs-info" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: this.state.textTabs === 4
                                                })}
                                                onClick={e => this.toggleTabs(e, "textTabs", 4)}
                                                href="#pablo"

                                            >
                                                <i className="tim-icons icon-email-85"/>
                                                Email
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="tab-space"
                                        activeTab={"link" + this.state.textTabs}
                                    >
                                        <TabPane tabId="link4">
                                            <FormGroup>
                                                <h4>Vul hier de email in </h4>
                                                <Input defaultValue="" onChange={this.setDomain} id={"email"}
                                                       value={this.state.email} placeholder="Het email adres"
                                                       type="email"/>
                                                <h4/>
                                                <h4>Vul hier de URL in </h4>
                                                <Input defaultValue="" onChange={this.setDomain} id={"URL"}
                                                       value={this.state.URL} placeholder="De URL voor de link"
                                                       type="url"/>
                                                <h4/>
                                                <FormGroup check className="form-check-radio">
                                                    <Label check>
                                                        <Input
                                                            // defaultValue="option1"
                                                            checked={this.state.artikelType === "option1"}
                                                            value={"option1"}
                                                            name="exampleRadios"
                                                            onChange={this.handleOptionChange}
                                                            type="radio"
                                                        />
                                                        <span className="form-check-sign"/>
                                                        Algemeen
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check className="form-check-radio">
                                                    <Label check>
                                                        <Input
                                                            // defaultValue="option2"
                                                            checked={this.state.artikelType === "option2"}
                                                            value={"option2"}
                                                            name="exampleRadios"
                                                            onChange={this.handleOptionChange}
                                                            type="radio"
                                                        />
                                                        <span className="form-check-sign"/>
                                                        Homepage
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check className="form-check-radio">
                                                    <Label check>
                                                        <Input
                                                            // defaultValue="option2"
                                                            checked={this.state.artikelType === "option3"}
                                                            value={"option3"}
                                                            onChange={this.handleOptionChange}
                                                            name="exampleRadios"
                                                            type="radio"
                                                        />
                                                        <span className="form-check-sign"/>
                                                        Artikel
                                                    </Label>
                                                </FormGroup>
                                                <h4/>
                                                <Button color="primary" onClick={this.toggleModal}>Bekijk
                                                    voorbeeld</Button>
                                                <Modal
                                                    isOpen={this.state.bevestigingsModal}
                                                    toggle={() => this.toggleModal("bevestigingsModal")}
                                                >
                                                    <div className="modal-header justify-content-center">
                                                        <button
                                                            className="close"
                                                            onClick={() => this.toggleModal("bevestigingsModal")}
                                                        >
                                                            <i className="tim-icons icon-simple-remove"/>
                                                        </button>
                                                        <h4 className="title title-up">Mail voorbeeld</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        {/*<textarea value={this.state.modalText} onChange={this.handleText} rows="4" cols="60"/>*/}
                                                        {this.state.modalText}
                                                    </div>
                                                    <div className="modal-footer">
                                                        <Button
                                                            color="default"
                                                            onClick={() => this.sendEmail()}
                                                            type="button">
                                                            Verstuur Email
                                                        </Button>
                                                        <Button
                                                            color="danger"
                                                            type="button"
                                                            onClick={() => this.toggleModal("bevestigingsModal")}
                                                        >
                                                            Sluit venster
                                                        </Button>
                                                    </div>
                                                </Modal>
                                            </FormGroup>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Tabs;
