const express = require("express");
const perfModel = require("./models");
const req = require("express/lib/request");
const app = express();

app.post("/perf", async (request, response) => {
    const perf = new perfModel(request.body);
  
    try {
      await perf.save();
      response.send(perf);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.delete('/perf/(:id)', async (req, res) => {
    try {
      msg = await perfModel.findByIdAndRemove(req.params.id);
      if (msg == null){
        throw new Error("no perf with id: " + req.params.id);
      } else {
        res.send(msg);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  })


app.get("/perfs", async (request, response) => {
  const perfs = await perfModel.find({});

  perfs.sort(function(a, b) {
    return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
});

  try {
    response.send(perfs);
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = app;