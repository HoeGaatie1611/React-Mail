const axios = require('axios');

const extractEmails = ( text ) => {
    const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    // console.log(emails);
    for(email of emails) {
        if(!email.includes("abuse"))
            console.log(email);
    }
};

const extractURL = (text) => {
    const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
        if(!url.includes("icann"))
            console.log(url);
    });
}

const getDomain = async (URL) => {
    let info;
    await axios
        .get('https://www.whoisxmlapi.com/whoisserver/WhoisService', {
            params: {
                domainName: URL,
                apiKey: "at_WHr6wbTFakUDWRWlqMZqDVoVNpWHh",
                outputFormat: "JSON"
            }
        })
        .then(({ data }) => {
            info = data;
            extractEmails(JSON.stringify(info));
            extractURL(JSON.stringify(info));
            // console.log(extractURL(JSON.stringify(info)));
        }, this)
        .catch((err) => {});
}

getDomain("https://xkcd.com/"); //abuse icann