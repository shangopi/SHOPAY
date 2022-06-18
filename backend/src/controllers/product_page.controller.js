var db = require("../../config/db.config");

exports.getProductDetails = (req,res) =>{
    
    const id=req.query.id;
       
   const sqlSelect="select * from product LEFT JOIN variant using (product_id) where product_id=?;"
    db.query(sqlSelect,[id],(err,result)=>{
        if (err) {
            res.send(err);
            //console.log(result);
            console.log("error: ", err);
            result(null, err);
            return;
        }
        else{
            res.send(result);
        }
     })

}

exports.getProductAttribute = (req,res) =>{
    
    const id=req.query.id;
    const sqlSelect="select * from custom_attribute where product_id=?;"
    db.query(sqlSelect,[id],(err,result)=>{
        if (err) {
            res.send(err);
            //console.log(result);
            console.log("error: ", err);
            result(null, err);
            return;
        }
        else{
            res.send(result);
        }
       //console.log(result);
     })

}

exports.getHomeScreenProduct = (req,res) =>{
    
    const sqlSelect="select * from product LEFT JOIN variant using (product_id);"
    db.query(sqlSelect,(err,result)=>{
        if (err) {
            res.send(err);
            //console.log(result);
            console.log("error: ", err);
            result(null, err);
            return;
        }
        else{
            res.send(result);
        }
     })

}

