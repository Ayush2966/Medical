const express=require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.write("<h1>Welcome to home page<h1>");
    res.write("<h1>Welcome to home page 2<h1>");
    res.send();
});
app.get("/about", (req, res) => {
    res.send("Welcome to about page");
});
app.get("/contact", (req, res) => {
    res.send("Welcome to contact page");
});
app.get("/temp", (req, res) => {
    res.json([{
        id:1,
        name:"ayush",
    },
    {
        id:1,
        name:"ayush",
    },
    {
        id:1,
        name:"ayush",
    }]);
});

app.listen(port, () => {

    console.log(`listening to the port no at ${port}`);
}
);