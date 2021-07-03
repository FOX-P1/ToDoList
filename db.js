import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to Mongo 🥭");

db.on("error", (error) => console.log("DB Error", error));
db.once("open", handleOpen);