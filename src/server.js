require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const creatureRoutes = require("./routes/creatureRoutes");
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use("/creature", creatureRoutes);

app.get("/", (req, res) => {
  res.send("Backend do Bestiário funcionando!");
});

const isProduction = process.env.NODE_ENV === "production";
const mongoURI = isProduction 
  ? process.env.MONGO_URI_ATLAS 
  : process.env.MONGO_URI_LOCAL;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado corretamente:", isProduction ? "Atlas" : "Local"))
.catch(err => console.error("Erro ao conectar no banco de dados:", err));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Servidor rodando porta " + PORT));