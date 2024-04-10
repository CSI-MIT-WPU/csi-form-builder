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
                reject(err);
            } else {
                const sheetId = response.data.replies[0].addSheet.properties.sheetId;
                resolve(sheetId);
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

const setSheetHeaders = async (sheets, spreadsheetId, sheetId, data) => {
    let sheetHeaders = [];
    data.forEach(field => {
        if (
            field.type !== "h1" &&
            field.type !== "h2" &&
            field.type !== "paragraph" &&
            field.type !== "separator"
        ) { sheetHeaders.push(field.label) }
    });
    return new Promise((resolve, reject) => {
        const request = {
            spreadsheetId: spreadsheetId,
            resource: {
                requests: [
                    {
                        "repeatCell": {
                            "range": {
                                sheetId: sheetId,
                                "startRowIndex": 1,
                                "endRowIndex": 2
                            },
                            "cell": {
                                "userEnteredFormat": {
                                    "horizontalAlignment": "CENTER",
                                    "textFormat": {
                                        "foregroundColor": {
                                            "red": 0.0,
                                            "green": 0.0,
                                            "blue": 0.0
                                        },
                                        "fontSize": 10,
                                        "bold": true
                                    }
                                }
                            },
                            "fields": "userEnteredFormat(textFormat,horizontalAlignment)"
                        }
                    },
                    {
                        "updateSheetProperties": {
                            "properties": {
                                "gridProperties": {
                                    "frozenRowCount": 1
                                }
                            },
                            "fields": "gridProperties.frozenRowCount"
                        }
                    },
                    {
                        updateCells: {
                            range: {
                                sheetId: sheetId,
                                startRowIndex: 1,
                                startColumnIndex: 1,
                            },
                            rows: [
                                {
                                    values: sheetHeaders.map(header => {
                                        return {
                                            userEnteredValue: { stringValue: header },
                                        };
                                    }),
                                },
                            ],
                            fields: "userEnteredValue",
                        },
                    },
                ],
            },
        };
        sheets.spreadsheets.batchUpdate(request, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
};


module.exports = { connectToGoogleSheets, createNewSheet, getSheetData, setSheetHeaders };