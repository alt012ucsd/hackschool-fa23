const improveTyping = async (didPractice) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (didPractice) {
                resolve(80);
            } else {
                reject(new Error("I failed"));
            }
        }, 2000);
    });
};

improveTyping(true)
    .then((result) => {
        console.log(`I have a typing speed of ${result} wpm!`);
    })
    .catch((error) => {
        console.log(error);
    })