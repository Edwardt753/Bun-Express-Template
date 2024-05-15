import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  return res.send("Hello Bun with Express");
});

route.post("/post", (req, res) => {
  const body = req.body;
  return res.status(200).json({
    message: true,
    data: body,
  });
});

export default route;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
