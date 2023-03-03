exports.getData = (req, res) => {
    // get data from database
    const data = {
        subject: 'IFT458',
        grade: 'A',
        date: '01/01/2031'
    }
    res.send(`Hello Grade! from GET ${JSON.stringify(data)}`)
};
exports.postData = (req, res) => res.send('Hello Grade! from POST');
exports.updateData = (req, res) => res.send('Hello Grade! from PUT');
exports.deleteData = (req, res) => res.send('Hello Grade! from DELETE')