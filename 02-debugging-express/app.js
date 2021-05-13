const express = require("express");
const app = express();
const port = 3000;

// Parse incoming requests with JSON payloads.
app.use(express.json());

// @GET - /
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// @GET - /hello?name={name}
app.get("/hello", (req, res) => {
    res.send(`Hello ${req.query.name}!`);
});

// @POST - /
// Pass JSON object with 'firstName' String and 'isMorningPerson' Boolean
app.post("/", function (req, res) {
    const { firstName, isMorningPerson } = req.body;
    if (
        firstName !== undefined &&
        typeof firstName === "string" &&
        isMorningPerson !== undefined &&
        typeof isMorningPerson === "boolean"
    ) {
        isMorningPerson
            ? res.send(`${firstName} hops out of bed.`)
            : res.send(`${firstName} is going back to bed.`);
    } else {
        console.log(typeof firstName);
        res.status(400).send("JSON body is improperly formatted.");
    }
});

// @ALL - *
// Catch-all Route
app.all("*", function (req, res) {
    res.send(
        "It looks like you are lost. Try calling:\n- GET '/'\n- GET '/hello?name={name}\n- POST '/'"
    );
});

app.listen(port, () => {
    console.log(`
|>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|
|                                                      |
| 💻 Web Server listening at http://localhost:${port}. 💻 |
|                                                      |
|<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<|
`);
});
