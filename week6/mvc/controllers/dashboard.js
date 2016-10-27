// route handlers for the dashboard

module.exports = {
    // the dashboard root route is handled here
    root : (req,res) => {
        res.send("DASHBOARD");
    },
    // the dashboard root route is handled here
    settings : (req,res) => {
        res.send("DASHBOARD Settings");
    }
};