import React from "react";
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'
// Import React FilePond
import {FilePond} from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
// reactstrap components
import {Button, Card, CardBody, Col, Container, Row, TabContent} from "reactstrap";


class Zoek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconTabs: 1,
            textTabs: 4,
            show: false,
            CSV: null,
            txt: null,
            fileReader: new FileReader(),
            csvReader: new FileReader(),
            CSVfile: null,
            txtArray: null,
            found: null
        };
    };

    componentDidUpdate() {
        // console.log(this.state);
    };

    toggleLoading = () => {
        this.setState({
            ["show"]: !this.state["show"]
        })
    };

    handleFile = () => {
        const content = String(this.state.fileReader.result);
        const textByLine = content.split("\n");
        this.setState({
            txtArray: textByLine
        })
        ;
    };

    handleCSV = () => {
        const content = this.state.csvReader.result;
        console.log(content);
        this.setState({
            CSVfile: content
        })
        this.toggleLoading();
    };

    searchFiles = () => {
        if(this.state.txt !== null && this.state.CSV !== null) {
            this.toggleLoading();
            this.state.fileReader.onloadend = this.handleFile;
            this.state.fileReader.readAsText(this.state.txt[0]);

            this.state.csvReader.onloadend = this.handleCSV;
            this.state.csvReader.readAsText(this.state.CSV[0]);
        } else {
            window.alert("Upload de bestanden voordat je dit doet")
        }
    };

    searchFilesActually = () => {
        if(this.state.CSVfile !== null && this.state.txtArray !== null) {
            const array = this.state.txtArray;
            const csv = this.state.CSVfile.toLowerCase();
            const found = [];
            const nieuw = [];
            for (let i = 0; i < array.length; i++) {
                const string = array[i];
                const firstStep = string.replace("www.", "");
                const secondStep = firstStep.replace("https://", "");
                const newValue = secondStep.replace("http://", "");
                if (csv.includes(newValue.trim().toLowerCase()))
                    found.push(newValue);
                else
                    nieuw.push(newValue)
            }
            this.setState({
                found: this.generateHTML([found, nieuw])
            });
        } else {
            window.alert("Verwerk de bestanden voordat je dit doet")
        }
    };

    generateHTML = (list) => {
        const emails = [];
        const niet = [];

        for (let item in list[0])
            emails.push({"name": list[0][item]})
        for (let item in list[1])
            niet.push({"name": list[1][item]})

        let emails1 = this.remove_duplicates_es6(emails);
        let niet1 = this.remove_duplicates_es6(niet);

        let emailItems = emails1.map((d) => <li type="1" key={d.name}><a href={d.name}>{d.name}</a></li>);
        let nieuweItems = niet1.map((d) => <li type="1" key={d.name}><a href={d.name}>{d.name}</a></li>);

        if (emailItems.length === 0)
            emailItems = "Er zijn geen emails gevonden";
        if (nieuweItems.length === 0)
            nieuweItems = "Er zijn geen emails gevonden";

        return (
            <div>
                <br/>
                <h3> Duplicaten </h3>
                {emailItems}
                <br/><br/>
                <h3> Niet gecontacteerd </h3>
                {nieuweItems}
            </div>
        );
    };

    remove_duplicates_es6 = (arr) => {
        let s = new Set(arr);
        let it = s.values();
        return Array.from(it);
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
                        <h3 className="mb-3">Zoekapplicatie voor Visible Parnters Ltd.</h3>
                    </div>
                    <Row>
                        <Col className="ml-auto mr-auto" md="12" xl="12">
                            <div className="mb-4">
                            </div>
                            <Card>
                                <CardBody>
                                    <TabContent
                                        className="tab-space"
                                        activeTab={"link" + this.state.iconTabs}
                                    >
                                        <h4> Upload hier het CSV bestand </h4>
                                        <FilePond
                                            files={this.state.CSV}
                                            allowMultiple={false}
                                            onupdatefiles={fileItems => {
                                                // Set currently active file objects to this.state
                                                this.setState({
                                                    CSV: fileItems.map(fileItem => fileItem.file)
                                                });
                                            }}
                                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                        />

                                        <Loading
                                            show={this.state.show}
                                            color="white"
                                        />

                                        <h4> Upload hier het text bestand </h4>
                                        <FilePond
                                            files={this.state.txt}
                                            allowMultiple={false}
                                            // onupdatefiles={this.state.setFiles}
                                            onupdatefiles={fileItems => {
                                                // Set currently active file objects to this.state
                                                this.setState({
                                                    txt: fileItems.map(fileItem => fileItem.file)
                                                });
                                            }}
                                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                        />

                                        <Button color="primary" onClick={this.searchFiles}>Verwerk bestanden </Button>
                                        <Button color="primary" onClick={this.searchFilesActually}>Doorzoek bestanden </Button>

                                        <h5> <br/><br/>
                                            {this.state.found}
                                        </h5>
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

export default Zoek;
