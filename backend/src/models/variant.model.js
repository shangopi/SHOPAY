var db = require("../../config/db.config");

const Variant = function (varient) {
    this.variant_id = varient.varient_id;
    this.count = varient.count;
    this.price = varient.price;
    this.image = varient.image;
    this.key = varient.key;
    this.value = varient.value;
};


Variant.getAllVarientsFullInfo = (variant_id, result) => {
    Variant.getAllVarient(variant_id, (err, data) => {
        if (err){
            result(null, err);
            return;
        }
        if (data.length) {
            for (let i = 0; i < data.length; i++) {
                const sqlquery = " SELECT type_id,value,name FROM variant_type left join type using (type_id) where variant_id=?;";
                db.query(sqlquery, [data[i].variant_id], (err, data1) => {
                if (err){
                    result(null, err);
                    return;
                }
                  console.log(data1);
                  data[i].typeId =[]
                  data[i].key =[]
                  data[i].value =[]
                  for(let j of data1){
                        data[i].typeId.push(j.type_id);
                        data[i].key.push(j.name);
                        data[i].value.push(j.value);
                   }                
                    if(i==data.length-1)  {
                        result(null,data);
                        return;
                    }   }) }
    }
        else {
            result({ kind: "not_found" }, null);
        }

    });
}


Variant.getVariantByID = (variant_id, result) => {
    
    const sqlSelect = "select variant_id,count,price,image from variant where variant_id=?;"
    db.query(sqlSelect, [variant_id], (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        if (res.length) {
            
            result(null, res);
            return;
        }
        else {
            result({ kind: "not_found" }, null);
        }
    })
}

Variant.getVariantInfoByID = (variant_id, result) => {
    const sqlSelect = "SELECT * FROM variant_type left join type using (type_id) where variant_id=?;"
    db.query(sqlSelect, [variant_id], (err, res) => {
        
        if (err) {
            result(null, err);
            return;
        }
        if (res.length) {
            result(null, res);
            return;
        }
        else {
            result({ kind: "not_found" }, null);
        }   
      
    })
}



Variant.getAllVarient = (product_id, result) => {
    const sqlSelect = "select variant_id,count,price,image from variant where product_id=?;"
    db.query(sqlSelect, [product_id], (err, res) => {
        if (err) {
            result(null, err);
        }
        if (res.length) {
            console.log(res);
            result(null, res);
        }
        else {
            result({ kind: "not_found" }, null);
        }
        console.log(result);
    })
}

module.exports = Variant;