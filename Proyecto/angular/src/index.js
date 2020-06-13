const express = require('express');
require('./database');  //link a dataabase
const app = express();
const cors =require('cors');
app.use(cors());
app.use(express.json()); //Para entender los json.
app.set('port',process.env.PORT || 3000); //inicializa el puerto del pc o el 3000
const puerto = app.get('port');
app.use(require('./routes/index'));

app.listen(puerto);
console.log("server on:",puerto);