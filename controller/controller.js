const productModel = require("../model/productModel")

const loadProduct = async(req,res)=>{
    try {
        const product = await productModel.find()
        res.render('product',{product})
    } catch (err) {
        console.log(err)
    }
}

const loadAddProduct = (req,res)=>{
    try{
        res.render('addProduct')
    }
    catch(err)
    {
        console.log(err)
    }
}

const loadEditProduct = async (req,res)=>{
    try{
    const id = req.query.id
       const product = await productModel.findById({_id:id})
       console.log(product)
        res.render('editProduct',{product})
    }
    catch(err)
    {
        console.log(err)
    }
}



const addProduct = async (req, res) => {
    try {
        console.log(req.body.des)
      const images = req.files; 
        const product = new productModel({
        name: req.body.name,
        mrp: req.body.mrp,
        discount: req.body.discount,
        shipcharge: req.body.shipcharge,
        total: req.body.total,
        des: req.body.des,
        image: images.map((file) => file.filename), 
      });
  
      await product.save().then(()=>console.log('Product saved'))
      res.redirect('/')
    } catch (err) {
      console.log(err);
    }
  };                    
  

  const editProduct = async(req,res)=>{
    try
    {
     const id = req.body.id
     const images = req.files;
     await productModel.findByIdAndUpdate({_id:id},{$set:
        {name:req.body.name, mrp: req.body.mrp,
        discount: req.body.discount,
        shipcharge: req.body.shipcharge,
        total: req.body.total,
        des: req.body.des,
        image: images.map((file) => file.filename), }})

        res.redirect('/')

}


catch(err)
{
    console.log(err)
}
   
  }


  const deleteProduct = async(req,res)=>{
    try{
      
        await productModel.findByIdAndRemove({_id:req.query.id})
        res.redirect('/')

    }catch(err)
    {
        console.log(err)

    }
  }
    

module.exports =
{
  addProduct,
  loadAddProduct,
  loadEditProduct,
  loadProduct,
  editProduct,
  deleteProduct
}

