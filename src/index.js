const express = require('express');
const path = require('path');

const app = express();
const port = 8001;

//builtin middleware

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("Express server");
});

app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
});