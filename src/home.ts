import app from "./index";

let MY_PORT = process.env.PORT|| 4000;
app.listen(MY_PORT);
console.log(`🚀 Server ready at ${MY_PORT}`);