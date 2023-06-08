const express = require('express');
const dbApp = express();

// create a mock user database
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

dbApp.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id == userId);
  res.send(user);
});

dbApp.listen(3001, () => {
  console.log('Server 2 listening on port 3001');
});