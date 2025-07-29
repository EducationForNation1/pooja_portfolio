import Pooja from "../models/poojaSchema.js"

const contact = (req,res)=>{
    try {
        res.render('contact')
    } catch (error) {
        console.log(error.message)
    }
}


const userContact = async(req,res)=>{
    try {
        const user = await Pooja({
            name:req.body.name,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message
        });
        if(user){
          await user.save();
          console.log("Contact saved!")
           res.redirect('/contact')

        }else{
            console.log("Contact data not saved!")
             res.redirect('/contact')
        }
        console.log(req.body)
       
    } catch (error) {
        console.log(error.message)
    }
}



export {contact,userContact}