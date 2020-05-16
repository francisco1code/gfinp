const express = require('express');
const router =  express.Router();


router.get('/postagens',(req,res) => {
    res.json({
        titulo: 'meu primeiro post',
        conteudo: 'coisa com coisa',
        autor: 'eu mesmo'
    })
})

module.exports = router;