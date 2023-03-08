
/*
    <------------------------------>
                // Err 
    <------------------------------>
    */



// const { Router } = require("express");
const express = require("express");

// const { route } = require('express/lib/application');
const mongoose = require("mongoose")



/*
    <------------------------------>
                // Err 
    <------------------------------>
    */
   
// const MySchemaFind = require("./app")
// const fun = require("../app")
// fun();

const routes = express.Router(); // middleware | handlebars





routes.get("/" ,(req,res)=>{

    res.render("index")
});




routes.get("/gallery", (req,res)=>{
    res.render("gallery")
})

// MySchemaFind();

module.exports = routes