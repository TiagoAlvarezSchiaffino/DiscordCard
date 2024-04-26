const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:id", (req, res) => {
    const userId = req.params.id;

    axios({
        method: "GET",
        url: `https://discord.com/api/v9/users/${userId}/profile`,
        headers: {
            "authorization": process.env.TOKEN,
        },
    }).then(response => {
        return res.send(response.data);
    })
    .catch(error => {
        console.error("Error in the request:", error.message);
        return res.status(500).send("Error getting user profile");
    });
});

module.exports = router;