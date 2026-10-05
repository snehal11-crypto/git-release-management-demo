const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Application is running');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Application is healthy'
  });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Application running on port 3000');
  });
}

module.exports = app;
