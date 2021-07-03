// import "./models/Todo";
import "dotenv/config";
import "./db";
import app from "./app";
import "./models/Todo";

const PORT = process.env.PORT || 3695;

const handleListening = () =>
    console.log(`❤️‍🔥 Server Listening Your HeartBeat ${PORT} 💓`);

app.listen(PORT, handleListening);