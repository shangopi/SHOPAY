const express=require('express')
const bodyParser =require('body-parser');
const cors=require('cors')
const app=express()
const mysql=require('mysql')

const db=mysql.createPool({
    //if u get any error go here https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
    host:"localhost",
    user:"root",
    password:"password",
    database:"shopay"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/getProduct',(req,res)=>{

    const id=req.query.id;
    const sqlSelect="select * from product natural join variant where product_id=?;"
    db.query(sqlSelect,[id],(err,result)=>{
       res.send(result);
       //console.log(result);
     })
    
})

app.get('/api/getProductForCart',(req,res)=>{

    const id=req.query.id;
    const sqlSelect="select * from product natural join variant where product_id=?;"
    db.query(sqlSelect,[id],(err,result)=>{
       res.send(result);
       //console.log(result);
     })
    
})

app.get('/api/get',(req,res)=>{

    const sqlSelect="select * from product natural join variant;"
    db.query(sqlSelect,(err,result)=>{
       res.send(result);
       //console.log(result);
     })
    
})

//app.post ->to insert
app.get('/',(req,res)=>{

    // const sqlInsert="insert into customer (cust_id,name,telephone) values (1,'Ashok',762786479);"
    // db.query(sqlInsert,(err,result)=>{
    //    res.send(err);
    // })
    res.send("result");
})

app.listen(3001,()=>{

    console.log('running on port 3001');
})