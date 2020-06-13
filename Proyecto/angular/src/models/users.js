const { Schema , model } = require('mongoose'); //nos traemos de moongose las clases schema y model
//Schema definira el formato de datos, en este caso 2.
const userSchema = new Schema({
    email: String,
    password: String
},{timestamps: true})
// Definimos el modelo user que usara este esquema y lo exportamos.
module.exports = model('User',userSchema);