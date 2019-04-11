import React from "react";
import classnames from "classnames";
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'
// reactstrap components
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    FormGroup,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";

import kankerRotterdam from '../../../src/assets/mp3/kankerRotterdam.mp3'
import fockit from '../../../src/assets/mp3/fckit.mp3'
import bakfietsen from '../../../src/assets/mp3/bakfietsen.mp3'
import bami from '../../../src/assets/mp3/bami.mp3'
import buurt from '../../../src/assets/mp3/buurtuitgeknikkerd.mp3'
import pan from '../../../src/assets/mp3/depan.mp3'
import dood from '../../../src/assets/mp3/dood.mp3'
import gin from '../../../src/assets/mp3/gageenginzuipe.mp3'
import krooswijk from '../../../src/assets/mp3/hierinkrooswijk.mp3'
import hop from '../../../src/assets/mp3/HOP.mp3'
import jebaa from '../../../src/assets/mp3/jebaaa.mp3'
import komkommer from '../../../src/assets/mp3/komkommers.mp3'
import lekker from '../../../src/assets/mp3/lekker.mp3'
import wijven from '../../../src/assets/mp3/wijven.mp3'
import jatoch from '../../../src/assets/mp3/zoishettoch.mp3'


class Soundboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconTabs: 1,
            textTabs: 4,
            show: false
        };
    };

    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };

    toggleLoading = () => {
        this.setState({
            ["show"]: !this.state["show"]
        })
    };

    toggleSound = (event) => {
        const value = event.currentTarget.id;
        if (value === "blue")
            this.blue.play();
        else if (value === "green")
            this.green.play();
        else if (value === "kankerrotterdam")
            this.kankerRotterdam.play();
        else if (value === "bami")
            this.bami.play();
        else if (value === "buurt")
            this.buurt.play();
        else if (value === "Pan")
            this.Pan.play();
        else if (value === "dood")
            this.dood.play();
        else if (value === "gin")
            this.gin.play();
        else if (value === "krooswijk")
            this.krooswijk.play();
        else if (value === "hop")
            this.hop.play();
        else if (value === "jebaa")
            this.jebaa.play();
        else if (value === "komkommer")
            this.komkommer.play();
        else if (value === "lekker")
            this.lekker.play();
        else if (value === "wijven")
            this.wijven.play();
        else if (value === "jatoch")
            this.jatoch.play();

    };


    componentDidUpdate() {
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
                <Loading
                    show={this.state.show}
                    color="white"
                />
                <Container>
                    <div className="title">
                        <h3 className="mb-3">Soundboard voor Visible Parnters Ltd.</h3>
                    </div>
                    <Row>
                        <Col className="ml-auto mr-auto" md="12" xl="12">
                            <div className="mb-4">
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
                                                Rotterdam
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
                                                Rattenplaag
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
                                                Binnenkort...
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
                                                <button id="green" className="btn btn-default"
                                                        onClick={this.toggleSound}>FOCK IT!
                                                </button>
                                                <audio ref={(green) => {
                                                    this.green = green;
                                                }}>
                                                    <source src={fockit}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>
                                                <button id="blue" className="btn btn-default"
                                                        onClick={this.toggleSound}>Bakfietsen en shit
                                                </button>
                                                <audio ref={(blue) => {
                                                    this.blue = blue;
                                                }}>
                                                    <source src={bakfietsen}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>
                                                <button id="kankerrotterdam" onClick={this.toggleSound}
                                                        className="btn btn-default">Kanker Rotterdam
                                                </button>
                                                <audio ref={(kankerrotterdam) => {
                                                    this.kankerRotterdam = kankerrotterdam;
                                                }}>
                                                    <source src={kankerRotterdam}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="bami" onClick={this.toggleSound}
                                                        className="btn btn-default">Bami
                                                </button>
                                                <audio ref={(bami) => {
                                                    this.bami = bami;
                                                }}>
                                                    <source src={bami}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="buurt" onClick={this.toggleSound}
                                                        className="btn btn-default">Buurt geknikkerd
                                                </button>
                                                <audio ref={(buurt) => {
                                                    this.buurt = buurt;
                                                }}>
                                                    <source src={buurt}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="Pan" onClick={this.toggleSound}
                                                        className="btn btn-default">Pan
                                                </button>
                                                <audio ref={(Pan) => {
                                                    this.Pan = Pan;
                                                }}>
                                                    <source src={pan}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="dood" onClick={this.toggleSound}
                                                        className="btn btn-default">Dood
                                                </button>
                                                <audio ref={(dood) => {
                                                    this.dood = dood;
                                                }}>
                                                    <source src={dood}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="gin" onClick={this.toggleSound}
                                                        className="btn btn-default">Gin zuipen
                                                </button>
                                                <audio ref={(gin) => {
                                                    this.gin = gin;
                                                }}>
                                                    <source src={gin}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="krooswijk" onClick={this.toggleSound}
                                                        className="btn btn-default">Hier in krooswijk
                                                </button>
                                                <audio ref={(krooswijk) => {
                                                    this.krooswijk = krooswijk;
                                                }}>
                                                    <source src={krooswijk}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="hop" onClick={this.toggleSound}
                                                        className="btn btn-default">Hop
                                                </button>
                                                <audio ref={(hop) => {
                                                    this.hop = hop;
                                                }}>
                                                    <source src={hop}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="jebaa" onClick={this.toggleSound}
                                                        className="btn btn-default">JEBAAA
                                                </button>
                                                <audio ref={(jebaa) => {
                                                    this.jebaa = jebaa;
                                                }}>
                                                    <source src={jebaa}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="komkommer" onClick={this.toggleSound}
                                                        className="btn btn-default">Komkommer
                                                </button>
                                                <audio ref={(komkommer) => {
                                                    this.komkommer = komkommer;
                                                }}>
                                                    <source src={komkommer}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="lekker" onClick={this.toggleSound}
                                                        className="btn btn-default">Lekker he
                                                </button>
                                                <audio ref={(lekker) => {
                                                    this.lekker = lekker;
                                                }}>
                                                    <source src={lekker}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="wijven" onClick={this.toggleSound}
                                                        className="btn btn-default">Hoop lekkere wijven
                                                </button>
                                                <audio ref={(wijven) => {
                                                    this.wijven = wijven;
                                                }}>
                                                    <source src={wijven}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>

                                                <button id="jatoch" onClick={this.toggleSound}
                                                        className="btn btn-default">Ja toch...
                                                </button>
                                                <audio ref={(jatoch) => {
                                                    this.jatoch = jatoch;
                                                }}>
                                                    <source src={jatoch}
                                                            type="audio/mpeg">
                                                    </source>
                                                </audio>
                                            </FormGroup>
                                        </TabPane>
                                        <TabPane tabId="link2">
                                            <FormGroup>
                                                <button className="btn btn-default">Normaal doen hoor</button>
                                                <button className="btn btn-primary">Normaal doen</button>
                                                <button className="btn btn-default">Normaal doen hoor</button>
                                                <button className="btn btn-default">Normaal doen hoor</button>
                                                <button className="btn btn-default">Normaal doen hoor</button>
                                            </FormGroup>
                                        </TabPane>
                                        <TabPane tabId="link3">
                                            <FormGroup>
                                                <button className="btn btn-default">Normaal doen hoor</button>
                                                <button className="btn btn-primary">Normaal doen</button>
                                                <button className="btn btn-default">Normaal doen hoor</button>
                                                <button className="btn btn-default">Normaal doen hoor</button>
                                                <button className="btn btn-default">Normaal doen hoor</button>
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
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Soundboard;
