// Load Data
// ===========================================================
var friends = require("../data/friends");

// Routing
// ===========================================================
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var lowestSum = 50;
        var sum = 0;
        var matchIndex;

        // Loop through current list of friends
        for (var i=0; i<friends.length; i++) {
            sum = 0;
            // Loop through each answer to calculate total difference
            for (var j=0; j<friends[i].scores.length; j++) {
                sum += Math.abs(req.body.scores[j]-friends[i].scores[j]);
            }
            // Update closest match if current user has lowest sum
            // Update matchIndex to track which user in array is closest match
            if (sum < lowestSum) {
                lowestSum = sum;
                matchIndex = i;
            }
        }
        var closestMatch = friends[matchIndex];
        friends.push(req.body);
        res.json(closestMatch);
    });

    app.post("/api/clear", function() {
        friends = [];
        console.log(friends);
    })
}