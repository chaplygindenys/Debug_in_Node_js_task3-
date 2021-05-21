const express = require('express');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller')
const {PORT} = require('./common/config');


const app = express();
// db.sync();
app.use(require('body-parser'));
// app.use(express.json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);

app.listen(PORT, () =>(
    console.log(`App is running on http://localhost:${PORT}`))
);