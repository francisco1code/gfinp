const express = require('express');
const router =  express.Router();


router.get('/comentarios/:postid',(req,res) => {
    res.json({
        conteudo: 'ai sim',
        autor: 'eu mesmo 2'
    })
})

module.exports = router;