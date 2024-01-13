const {problem2} = require('../fs-Problem2.cjs');


async function success () {
    try{
        await problem2("../lipsum.txt");
        console.log("Operation Completed Sucessfully.");
    } catch(err) {
        console.log("Error:", err);
    }
};

success();