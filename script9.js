const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

function TagCount(tweets) {
    const tagC = {};

    tweets.forEach(tweet => {
        tweet.tags.forEach(tag => {
            if (tagC[tag]) {
                tagC[tag]++;
            } else {
                tagC[tag] = 1;
            }
        });
    });

    return tagC;
}

const result = TagCount(tweets);
console.log(result);