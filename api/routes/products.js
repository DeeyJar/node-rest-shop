const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) =>{
    res.status(200).json({
        message: 'Handing Get request'
    });
});

router.get('/:productId', (req,res,next) =>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id : id
        });
    }else{
        res.status(200).json({
            message: 'You passes an ID'
        });
    }
});

router.post('/', (req,res,next) =>{
    res.status(200).json({
        message: 'Handing POST request'
    });
});

module.exports = router;