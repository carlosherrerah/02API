console.log("Hello Word")
import app from "./app.js";
import { PORT } from './config.js'


app.listen(PORT)

console.log('Server corriendo on port ', PORT);

