const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const creatureRoutes = require("./routes/creatureRoutes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/creature", creatureRoutes);

mongoose.connect("mongodb://localhost:27017/bestiario", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado"))
.catch(err => console.error(err));

const PORT = 3001;
app.listen(PORT, () => console.log("Servidor rodando porta " + PORT));