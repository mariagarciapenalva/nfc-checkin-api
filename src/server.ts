// Express server setup.
import express from "express";

// define our app as a express instance
const app = express();

// lets the api read .json request bodies.
app.use(express.json());

// health check variables from .json
app.get("/health", (_req, res) => {res.json({ok: true})});

// listen to the port, so the server is connected
app.listen(3000, ()=> console.log("API on http://localhost:3000"));
