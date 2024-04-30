const express = require('express');
const router = require('./routes/index.js');

const app = express();
const port = 1245;

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(PORT, () => {
	console.log(`...... Connecting on port ${PORT}`);
});

export default app;
