const home = (req,res)=>{
   try {
      res.render('index.ejs');
   } catch (error) {
      console.log(error.message)
   }
}

export {home}