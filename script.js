// JS
const user = {
    id: 245,
    fname: "Masud",
    hater: {
        fname: "Jamila",
        favFood: "pizza"
    },
    friendsAge: [12, 15, 17, 20, 45],
    friends: ["Kamal", "Jamal", "Samal"]
};
// {"id":245,"fname":"Masud"} // JSON

// converting to JSON string
const userJSON = JSON.stringify(user);
console.log(userJSON);

// converting to JSON object
const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);