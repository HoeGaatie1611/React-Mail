const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        console.info('Requesting', requestData.url);
    });

    const status = await page.open('http://whois.domain-registry.nl/whois?domain=onlineroulette1.nl');
    const content = await page.property('content');
    console.log(content);

    console.log(extractURL(content));
    console.log(extractEmails(content));

    await instance.exit();
})();

const extractURL = (text) => {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    const allURL = [];
    text.replace(urlRegex, function (url) {
        if (!url.includes("icann") && !allURL.includes(url))
            allURL.push(url);
    });
    return allURL;
};

const extractEmails = (text) => {
    const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    // console.log(emails);
    const allEmails = [];
    for (let email of emails) {
        if (!email.includes("abuse") && !allEmails.includes(email))
            allEmails.push(email);
    }
    return allEmails;
};