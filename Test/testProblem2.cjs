const {problem2} = require('../fs-Problem2.cjs');


(async () => {
    try{
        await problem2('lipsum.txt');
        console.log("Operation Completed Sucessfully.");
    } catch {
        console.log("Error:", err);
    }
})();
