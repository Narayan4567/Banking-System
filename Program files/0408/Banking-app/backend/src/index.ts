import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import accountRoutes from "./routes/accountRoutes";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/accounts", accountRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
