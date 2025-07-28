const services = (req,res)=>{
    try {
        res.render('services')
    } catch (error) {
        console.log(error.message)
    }
}


export {services}