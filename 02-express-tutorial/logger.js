const logger = (req,res,next)=>{
    const method =req.method;
    const url = req.url;
    let time = `${(new Date()).toLocaleTimeString()} - ${(new Date()).getDate()}/${(new Date()).getMonth() + 1}/${(new Date()).getFullYear()}`;

    console.log(method ,url,time)
    next()
   }
module.exports = logger