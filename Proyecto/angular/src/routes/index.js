const express = require('express');
const router = express.Router();
const User = require('../models/users');
const jwt = require('jsonwebtoken');

router.get('/',(req,res)=>{
    res.send('ya no te pasha por el parke');
});

router.post('/registro', async (req,res) =>{
    const { email , password } = req.body; //captura la petición y la guarda en dos variables
    const newUser = new User({email, password}); //crea una clase usuario y la almacena con las variables en newUser
    await newUser.save(); //guarda la clase en la db
    const token = jwt.sign({_id: newUser._id},'secret'); //con el modulo jwt creo un token con la id del usuario
    res.status(200).json({token}); // devuelvo el token al cliente 
    //IMPORTANTE: ENCRIPTAR CON BCRIPT
})
//IMPORTANTE: validacion simple, hay que cifrarlo
router.post('/login', async (req,res)=>{
    const { email , password } = req.body;
    const user = await User.findOne({email}); //busca el correo en la bd para ver si coincide con el introducido.
    if (!user) return res.status(401).send('El correo no existe');
    if (user.password !== password) return res.status(401).send('Password no existe');
    const token = jwt.sign({_id: user._id},'secret'); //le asignamos el token, debe ser el mismo que el especificado antes.
    res.status(200).json({token});
})

router.get('/public', (req,res)=>{
    res.json([
        {
            _id:1,
            name:"task1",
            desc: "asd"
        },
        {
            _id:2,
            name:"task2",
            desc: "asd"
        },     {
            _id:3,
            name:"task3",
            desc: "asd"
        }
    ])
})
router.get('/private', validatetoken, (req,res)=>{
    res.json([
        {
            _id:1,
            name:"task1PRIVATE",
            desc: "PRIVATE"
        },
        {
            _id:2,
            name:"task2PRIVATE",
            desc: "PRIVATE"
        },     {
            _id:3,
            name:"PRIVATEtask3",
            desc: "PRIVATE"
        }
    ])
})
router.get('/profile',validatetoken,(req,res)=>{
    res.send(req.userID);
})
function validatetoken(req,res,next)
{
    if (!req.headers.authorization)
    return res.status(401).send('no autorizado');
    const token = req.headers.authorization.split(' ')[1]; //saca el token (quita bearer)
    console.log("token;;;",token);
    if (token === null)
    return res.status(401).send('no autorizado');
    const payload = jwt.verify(token,'secret',(err, decoded) => {
            
        if (err) {
            console.log(jwt.decode(token));
            console.log(err.name,":-:", err.message);
            return res.status(401).send('no autorizado');
        } else {
            return decoded;
        }
    });
    // const payload = jwt.verify(token,'secret');
    req.userID = payload._id;; //obtiene el content del token
    next();
    
}
module.exports = router;