import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";

const app = express();
const logger = morgan("dev");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", process.cwd() + "/views");
app.use(logger);

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 9999999,
        },
        store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    })
);

app.use((req, res, next) => {
    // console.log(req.headers);
    next();
})

app.use("/", rootRouter);
app.use("/client", express.static("client"));

export default app;