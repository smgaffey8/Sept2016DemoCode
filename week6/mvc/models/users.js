// Model file for app users (hardcoded)
// This will typically be where we do our database stuff

var users = [{
    name:'Dumbo',
    email:'dumboTheElephant@trump.com',
    age: 170
},{
    name:'Hadoop',
    email:'bigData@hadoop.com',
    age: 33
},{
    name:'Sneezy',
    email:'hadABadDay@allergies.com',
    age:37
}];

module.exports = {
    // return all users in the database
    findAll: () => {
        return users;
    },
    // find a single user based on the index
    find: (index) => {
        return users[index];
    },
    // add a new user to the beginning of the data array
    add: (user) => {
        users.unshift(user);
    }, 
    // delete a user from the users array
    delete: (index) => {
        users.splice(index,1);
    }
};