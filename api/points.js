const request = require('request-promise');
const config = require('../config');


exports.addPointsByDiscordID = (discordID, points) => {
    return new Promise(async (resolve) => {
        let options = {
            method: 'PUT',
            body: {
                points
            },
            uri: `${config.apiUrl}/points/discord-id/${discordID}`,
            json: true
        };

        let user = await request(options);
        resolve(user.data.length ? user.data[0] : user.data);
    });
};

exports.addPointsByUserID = (userID, points) => {
    return new Promise(async (resolve) => {
        let options = {
            method: 'PUT',
            body: {
                points
            },
            uri: `${config.apiUrl}/points/user-id/${userID}`,
            json: true
        };

        let user = await request(options);
        resolve(user.data.length ? user.data[0] : user.data);
    });
};

exports.daily = (userID) => {
    return new Promise(async (resolve) => {
        let options = {
            method: 'PUT',
            body: {},
            uri: `${config.apiUrl}/points/user-id/${userID}/daily`,
            json: true
        };

        let reward = await request(options);
        resolve(reward.data.reward);
    });
}