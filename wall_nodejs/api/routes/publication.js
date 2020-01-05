const express = require('express');
const dbService = require('../../db_service');
const router = express.Router();
const url=require('url');

router.get('/', (req, res, next)=>{
        let queryString = "SELECT * FROM publications"
    
        dbService.query(queryString)
        .then(result=>{
            res.status(200).json(result);
        })
        .catch(err=>{
            res.status(500).json(err);
        })
    })

router.post('/', (req, res, next)=>{
        dbService.query("INSERT INTO publications VALUES(NULL,'"+req.body.author+"','"+req.body.content+"','"+req.body.date+"')")
        .then(result=>{
                res.status(201).json({
                message:'Publication posted',
                createdProject:result
                });
        })
        .catch(err=>{
                res.status(500).json(err);
        })
})

module.exports = router;