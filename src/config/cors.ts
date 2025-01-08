import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    const whitelist = [process.env.FRONTEND_URL, "http://localhost:3000"];

    console.log("Origin:", origin); // Log para ver qué origin está bloqueado

    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      console.error("Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  }, 
};

