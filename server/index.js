const express =require ('express')
const mysql =require('mysql')
const cors = require ('cors')
const app= express()
app.use(express.json())
app.use(cors())
app.listen(3000)

const con =mysql.createConnection({
    host: 'localhost',
    user :'root',
    password :'',
    database :'ecom'
})
app.post('/saveemp', function (req,res){
    const name =req.body.name
    const username =req.body.username
    const password =req.body.password
    const address=req.body.address
    const phonenumber=req.body.phonenumber
    con.query ("insert into register(name,username,password,address,phonenumber) values (?,?,?,?,?)", [name,username,password,address,phonenumber],(err,result)=>{
        if (err){
            throw err
        }else{
            res.send("inserted successfully")
        }
    }
    )
})

app.post('/login',(req,res)=>{
    const que="SELECT * FROM register WHERE username=? and password=?"
    const username=req.body.username
    const password=req.body.password

    con.query(que,[username,password],(err,result)=>{

        if(err){
            throw err
        }
        if(result.length>0){
            res.send({Login:true})
        }else{
            res.send({Login:false})
        }
    })

})