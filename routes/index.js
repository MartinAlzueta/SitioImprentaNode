var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function(req, res, next) {
  novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0,5);
  novedades = novedades.map(novedad =>{
    if (novedad.img_id) {
      const imagen = cloudinary.url(novedad.img_id, {
        widht: 350,
        height: 220,
        crop: "fill"
      });
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: '/images/tinta1-s.jpg'
      }
    }
  });

  res.render('index', {
    novedades
  });
});

router.post('/', async(req, res, next) => {

  var nombre = req.body.nombre;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;
  
  
  var obj = {
      to: 'impresosUrquiza@gmail.com',
      subject: 'Contacto Web',
      html: nombre + "se contactó a través de nuestra web y solicitó más información a este correo : " + email + ". <br> Su teléfono es:" + tel + "<br> Recibimos el siguiente comentario: " + mensaje  
      }
  
  var transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
      }
  });    

  var info = await transport.sendMail(obj);

  res.render('index', {
      message: 'Mensaje enviado correctamente'
  });
});

module.exports = router;


