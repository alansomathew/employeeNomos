const express=require('express');//including express Installed to This Backend File
const cors=require('cors');//including cors Installed to This Backend File
const bodyparser=require('body-parser');//including body-parser Installed to This Backend File
const mysql=require('mysql2');//including mysql2 Installed to This Backend File
const req = require('express/lib/request');
const res = require('express/lib/response');


const app=express(); //creating Expresss App
app.use(cors());//App Want To Use Cors For Using get,post,put,delete methods
app.use(bodyparser.json());//App Want To Use json data Converting For Using frontend and Back ENd data Passing

//Database Connection

const db=mysql.createConnection({
    host:"localhost",
    database:'db_employeenomos',
    user:'root',
    password:'',
    port:3306
})

db.connect(err=>{
    if(err){
        console.log(err)
    }
    console.log("Database Connected SucessFully....")
})
app.post('/designation',(req,res)=>{
    let dname=req.body.designationname;
    let dept=req.body.dept;
    let qry=`insert into tbl_desig(designation_name,dept_id)values('${dname}','${dept}')`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Inserted"
            });
        }
    });
});

app.get('/designation',(req,res)=>{
    let qry=`select * from tbl_desig`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result

            });
        }
    });
});
app.get('/designation/:id',(req,res)=>{
    let ids=req.params.id
    let qry=`select * from tbl_desig where dept_id='${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result

            });
        }
    });
});
app.post('/department',(req,res)=>{
    let dname=req.body.departmentname;
    let qry=`insert into tbl_dept(dept_name)values('${dname}')`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Inserted"
            });
        }
    });
});
app.get('/department',(req,res)=>{
    let qry=`select * from tbl_dept`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result

            });
        }
    });
});

app.delete('/department/:id',(req,res)=>{
    let ids=req.params.id
    let qry=`delete from tbl_dept where dept_id='${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result

            });
        }
    });
});

app.delete('/designation/:id',(req,rws)=>{
    let ids=req.params.id
    let qry=`delete from tbl_desig where designation_id='${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result

            });
        }
    });
});


app.post('/securityqtn',(req,res)=>{
    let sname=req.body.securityname;
    let qry=`insert into tbl_securityqtn(security_qtn)values('${sname}')`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Inserted"
            });
        }
    });
});

app.get('/securityqtn',(req,res)=>{
    let qry=`select * from tbl_securityqtn`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result

            });
        }
    });
});

app.delete('/securityqtn/:id',(req,res)=>{
    let ids=req.params.id
    let qry=`delete from tbl_securityqtn where security_id='${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result

            });
        }
    });
});


app.post('/emp',(req,res)=>{
    let fname=req.body.fname;
    let lname=req.body.lname;
    let gender=req.body.gender;
    let contact=req.body.contact;
    let email=req.body.email;
    let address=req.body.address;
    let uname=req.body.uname;
    let password=req.body.password;
    let cpassword=req.body.cpassword;
    let dob=req.body.dob;
    let sqtn=req.body.sqtn;
    let answer=req.body.answer;
    let dept=req.body.dept;
    let desig=req.body.desig;
    let fullname=fname+lname

    let qry=`insert into tbl_employee(emp_name,emp_gender,emp_contact,emp_address,emp_username,emp_password,emp_dob,security_id,security_answer,designation_id,dept_id,emp_doj,emp_email)values('${fullname}','${gender}','${contact}','${address}','${uname}','${password}','${dob}','${sqtn}','${answer}','${dept}','${desig}',curdate(),'${email}')`;
    console.log(qry)
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Inserted"
            

            });
        }
    });
})

app.post('/client',(req,res)=>{
    let fname=req.body.fname;
    let lname=req.body.lname;
    let gender=req.body.gender;
    let contact=req.body.contact;
    let email=req.body.email;
    let address=req.body.address;
    let uname=req.body.uname;
    let password=req.body.password;
    let cpassword=req.body.cpassword;
    let dob=req.body.dob;
    let sqtn=req.body.sqtn;
    let answer=req.body.answer;
    let fullname=fname+lname;
    let qry=`insert into tbl_client(client_name,client_gender,client_contact,client_email,client_address,client_uname,client_password,client_dob,security_id,security_answer,client_doj)values('${fullname}','${gender}','${contact}','${email}','${address}','${uname}','${password}','${dob}','${sqtn}','${answer}',curdate())`;
    console.log(qry)
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Inserted"

            });
        }
    });
})

app.post('/projecthead',(req,res)=>{
    let fname=req.body.fname;
    let lname=req.body.lname;
    let gender=req.body.gender;
    let contact=req.body.contact;
    let email=req.body.email;
    let address=req.body.address;
    let aadhar=req.body.aadhar;
    let uname=req.body.uname;
    let password=req.body.password;
    let cpassword=req.body.cpassword;
    let dob=req.body.dob;
    let sqtn=req.body.sqtn;
    let answer=req.body.answer;
    let dept=req.body.dept;
    let desig=req.body.desig;
    let fullname=fname+lname

    let qry=`insert into tbl_projecthead(ph_name,ph_gender,ph_contact,ph_address,ph_aadhar,ph_uname,ph_password,ph_dob,ph_email,security_id,security_answer,dept_id,designation_id,ph_doj)values('${fullname}','${gender}','${contact}','${address}','${aadhar}','${uname}','${password}','${dob}','${email}','${sqtn}','${answer}','${dept}','${desig}',curdate())`;
    console.log(qry)
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Inserted"


            });
        }
    });
})

app.get('/projecthead',(req,res)=>{
    let qry=`select * from tbl_projecthead`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result

            });
        }
    });
});

app.get('/newemployee',(req,res)=>{
    let qry=`select * from tbl_employee e inner join tbl_dept d on d.dept_id=e.dept_id inner join tbl_desig ds on ds.designation_id=e.designation_id where e.emp_vstatus=0`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result

            });
        }
    });
});
app.put('/acceptemp/:id',(req,res)=>{
    let ids=req.params.id
    let qry=`update tbl_employee set emp_vstatus='${1}' where emp_id='${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived"

            });
        }
    });
});
app.put('/rejectemp/:id',(req,res)=>{
    let ids=req.params.id
    let qry=`update tbl_employee set emp_vstatus='${2}' where emp_id='${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived"

            });
        }
    });
});

// view accepted employee
app.get('/acceptedemployee',(req,res)=>{
    let qry=`select * from tbl_employee e inner join tbl_dept d on d.dept_id=e.dept_id inner join tbl_desig ds on ds.designation_id=e.designation_id where e.emp_vstatus=1`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result

            });
        }
    });
});
app.put('/rejectedemp/:id',(req,res)=>{
    let ids=req.params.id
    let qry=`update tbl_employee set emp_vstatus='${2}' where emp_id='${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data deleted"

            });
        }
    });
});

// view rejected employee
app.get('/rejectedemployee',(req,res)=>{
    let qry=`select * from tbl_employee e inner join tbl_dept d on d.dept_id=e.dept_id inner join tbl_desig ds on ds.designation_id=e.designation_id where e.emp_vstatus=2`;
    db.query(qry,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"data deleted ",
                data:result
            });
        }
    });
});
app.put('/acceptedemp/:id',(req,res)=>{
    let ids=req.params.id
    let qry=`update tbl_employee set emp_vstatus='${1}' where emp_id= '${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0)
        {
            res.send({
                message:'data retrived'
            });
        }
    });
});
// take all data of admin,projecthead,client,employee to login
app.get('/admin',(req,res)=>{
    let qry=`select * from tbl_admin`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0)
        {
            res.send({
                message:"data retrived",
                data:result
            });
        }
    });
});
app.get('/projecthead',(req,res)=>{
    let qry=`select * from tbl_projecthead`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0)
        {
            res.send({
                message:"data retrived",
                data:result
            });
        }
    });
});
app.get('/employee',(req,res)=>{
    let qry=`select * from tbl_employee`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0)
        {
            res.send({
                message:"data retrived",
                data:result
            });
        }
    });
});
app.get('/client',(req,res)=>{
    let qry=`select * from tbl_client`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0)
        {
            res.send({
                data:result
            });
        }
    });
});

// myprofile
app.get('/client/:id',(req,res)=>{
    let ids=req.params.id
    let qry=`select * from tbl_client where client_id='${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result
            });
        }
    });
});
app.get('/projecthead/:id',(req,res)=>{
    let ids=req.params.id
    let qry=`select * from tbl_projecthead where ph_id='${ids}'`;
    console.log(qry)
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result
            });
        }
    });
});
app.get('/emp/:id',(req,res)=>{
    let ids=req.params.id
    let qry=`select * from tbl_employee where emp_id='${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived",
                data:result
            });
        }
    });
});
// change password
app.put('/projecthead/:id',(req,res)=>{
    let ids=req.params.id
    let password=req.body.newpassword
    let qry=`update tbl_projecthead set ph_password='${password}' where ph_id='${ids}'`;

    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived"
                
            });
        }
    });
});
app.put('/employee/:id',(req,res)=>{
    let ids=req.params.id
    let password=req.body.newpassword
    let qry=`update tbl_employee set emp_password='${password}' where emp_id='${ids}'`;
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length>0){
            res.send({
                message:"Data Retrived"
            });
        }
    });
});
app.listen(3000,()=>{//Create A server to Accept Request From Front End
    console.log("Server Running..............")
})