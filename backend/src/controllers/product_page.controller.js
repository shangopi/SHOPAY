var db = require("../../config/db.config");

exports.getProductDetails = (req,res) =>{
    const id=req.query.id;
       
   const sqlSelect="select * from product natural join variant where product_id=?;"
    db.query(sqlSelect,[id],(err,result)=>{
       res.send(result);
     })

}

exports.getProductAttribute = (req,res) =>{
    
    const id=req.query.id;
    const sqlSelect="select * from custom_attribute where product_id=?;"
    db.query(sqlSelect,[id],(err,result)=>{
       res.send(result);
       //console.log(result);
     })

}
exports.getProductForCart = (req,res) =>{
    
    const id=req.query.id;
    const sqlSelect="select * from product natural join variant where product_id=?;"
    db.query(sqlSelect,[id],(err,result)=>{
       res.send(result);
       //console.log(result);
     })

}
exports.getHomeScreenProduct = (req,res) =>{
    
    const sqlSelect="select * from product natural join variant;"
    db.query(sqlSelect,(err,result)=>{
       res.send(result);
       //console.log(result);
     })

}