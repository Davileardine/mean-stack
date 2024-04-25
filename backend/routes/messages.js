var express = require('express'); 
var router = express.Router();

const Message = require('../model/message');

router.post('/', async function (req, res,next){
    const msgObject = new Message({
        content: req.body.content
    });

    try{
        const msgSave = await msgObject.save();
        console.log(msgSave);

        res.status(201).json({
            msgOk: "Msg Enviada!",
            objMsgOk: msgSave
        });
    }
    catch(err){
        return res.status(500).json({
            msgError: 'Server-side: Deu ruim na mensagem!',
            error: err
        });
    }

});

module.exports = router;