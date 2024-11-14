
// promise chaining 
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched user");
            resolve({ id: 1, name: "Alice" });
        }, 1000);
    });
}

function getUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched posts for user:", userId);
            resolve(["Post 1", "Post 2"]);
        }, 1000);
    });
}

function processPosts(posts) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processed posts:", posts);
            resolve("Processing complete!");
        }, 1000);
    });
}

getUser()
    .then((user) => getUserPosts(user["name"]))
    .then((posts) => processPosts(posts))
    .then((message) => console.log(message))
    .catch((error) => console.error("Error:", error));
