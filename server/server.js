const express = require('express');
const cors = require('cors');
const app = express();

//MIDDLEWARE
//Both are needed for POST and PUT calls (ie where we send info in the request)
//Without we will get TypeErrors on our POST calls

//This parses incoming request with JSON payloads
//Allow us to recognize Request Object as a JSON Object
app.use(express.json());

//This parses incoming requests with JSON payloads consisting of Strings or Arrays
//Allow us to recognize Request Object as a String or Arrays
app.use(express.urlencoded({extended: true}));

//This lets our front end at port 3000 make calls to our back end port 8000.
//Taking it away will result in cors errors when attempting axios calls
app.use(cors({origin: "http://localhost:3000"}))


require("./config/mongoose.config");
require("./routes/game.routes")(app);
//LONGHAND OF THE ABOVE:
//const gameRoutes =require("./routes/game.routes);
//gameRoutes(app);

app.listen(8000, ()=>console.log("You are connected to porty 8000"));
