const { google } = require("googleapis");

const connectToGoogleSheets = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });
    return sheets;
}

const createNewSheet = (sheets, spreadsheetId, title) => {
    return new Promise((resolve, reject) => {
        const request = {
            spreadsheetId: spreadsheetId,
            resource: {
                requests: [
                    {
                        addSheet: {
                            properties: {
                                title: title,
                            },
                        },
                    },
                ],
            },
        };
        sheets.spreadsheets.batchUpdate(request, (err, response) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
};


const getSheetData = (sheets) => {
    return new Promise((resolve, reject) => {
        sheets.spreadsheets.values.get({
            spreadsheetId: "1B7b8Zljx4JqKYYifHOrn-VcwSboS3h00_HsL-YWlxTI",
            range: "Sheet1"
        }, (err, response) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // console.log(response.data.values);
                resolve(response.data.values);
            }
        });
    });
}

module.exports = { connectToGoogleSheets, createNewSheet, getSheetData };