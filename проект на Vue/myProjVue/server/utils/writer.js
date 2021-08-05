let fs = require('fs');
module.exports = async function (url, data) {
    try {
        await fs.writeFile(url, JSON.stringify(data, null, 4), err => {
            if(err) {
            console.log('Write file err1');
            }
        });
        return true;
    }
    catch (err) {
        console.log('Write file err');
        return false;
    }
}