// app.js

const express = require('express');
const app = express();
const axios = require('axios');

// First server for displaying user information
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  console.log("Info for a user requested")

  try {
    // send a GET request to the second server to retrieve user information
    const response = await axios.get(`http://db-app:3001/users/${userId}`);

    // extract the user data from the response
    const user = response.data;

    // return the user data in the response
    res.send(`User ${userId} information: ${JSON.stringify(user)}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving user information');
  }

});

app.listen(3000, () => {
  console.log('Server 1 listening on port 3000');
});


