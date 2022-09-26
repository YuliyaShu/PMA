import mongoose from "mongoose";
import { PORT } from "./src/constants";

import * as serverService from "./src/services/server.service";

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://YuliyuShu:juliette73@cluster0.jpl8bjv.mongodb.net/managerApp"
    );
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log("Сервер ожидает подключения...");
    });
  } catch (error) {
    console.log(error);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
