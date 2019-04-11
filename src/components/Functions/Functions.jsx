import React from "react";

const axios = require('axios');

export const getEmails = async (URL, link) => {
    if (link === 1) {
        const newURL = `http://192.168.0.22:3003/getmails?url=${URL}`;
        let data = await gatherDutchData(newURL);
        let information = [];
        information.push(data[1].emails);
        information.push(data[0].links);
        return generateHTML(information)

    } else {
        const information = await getDomain(URL);
        return generateHTML(information)
    }
};

export const sendMail = async (user, email, URL) => {
    let info = [];
    await axios
        .get(`http://192.168.0.22:3003/sendEmail?user=${user}&email=${email}&url=${URL}`, { crossdomain: true })
        .then(async ({data}) => {
            if(data.status === "Failed")
                alert("Somethign went wrong: " + data.error);
            else {
                alert("Email sent!")
            }
        }, this)
        .catch((err) => {
        });
    return info;
};

const generateHTML = (list) => {
    const emails = [];

    for (let item in list)
        emails.push({"name": list[item]})

    let emailItems = emails.map((d) => <li key={d.name}>{d.name}</li>);

    if (emailItems.length === 0)
        emailItems = "Er zijn geen emails gevonden";

    return (
        <div>
            <br/>
            <h3> Gevonden links: </h3>
            {emailItems}
        </div>
    );
};

const gatherDutchData = async (URL) => {
    let info = [];
    await axios
        .get(URL, { crossdomain: true })
        .then(async ({data}) => {
            info = data;
        }, this)
        .catch((err) => {
        });
    return info;
};

const extractEmails = (text) => {
    const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    const allEmails = [];
    for (let email of emails) {
        if (!email.includes("abuse") && !allEmails.includes(email))
            allEmails.push(email);
    }
    return allEmails;
};

const extractURL = (text) => {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    const allURL = [];
    text.replace(urlRegex, function (url) {
        if (!url.includes("icann") && !allURL.includes(url))
            allURL.push(url);
    });
    return allURL;
};

const getDomain = async (URL) => {
    let info = [];
    await axios
        .get('https://www.whoisxmlapi.com/whoisserver/WhoisService', {
            params: {
                domainName: URL,
                apiKey: "at_WHr6wbTFakUDWRWlqMZqDVoVNpWHh",
                outputFormat: "JSON"
            }
        })
        .then(async ({data}) => {
            // info = data;
            info.push(await extractEmails(JSON.stringify(data)));
            info.push(await extractURL(JSON.stringify(data)));
        }, this)
        .catch((err) => {
        });
    return info;
};

export const getText = (option, URL) => {
    if (URL === "")
        return <h1 style={{color:'black'}}>De URL is leeg...</h1>;
    else
        return <div><p>Beste heer/mevrouw,</p>

            <p>Ik vroeg me af wat de mogelijkheden zijn m.b.t. adverteren op <a href={URL}>{URL}</a>. </p>
            <p>Bijvoorbeeld een artikel, een eigen pagina of een link op de homepagina.</p>
            <p>Ik verneem het graag van u.</p>

            <p>Met vriendelijke groet, <br/></p>
        </div>;
};