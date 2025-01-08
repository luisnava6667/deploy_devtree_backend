import colors from "colors";
import server from "./server";

const PORT = process.env.PORT || 3000;

server.listen(3000, () => {
  console.log(colors.blue.bold(`Server is listening on port ${PORT}`));
});

