const express= require ('express');
const app=express();
app.use(express.static('./dist'));
let port=process.env.PORT||3500;
app.listen(port,()=>{console.log(`server listening on port ${port}`)});