const express = require("express");
const app = express();

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users", function(req, res) {
  res.json({
    sucess: true,
    message: "successfully got users. Nice!",
    users: mockUserData
  });
});

app.listen(8000, function() {
  console.log("server is running on port 8000");
});
