const router=require('express').Router()

const trip=require('../../model/trip.model')

router.get('/',async (req,res)=>{
   try{
    const trips = await trip.find()
    res.json(trips)
   }catch(eror){
    res.status(500).json({eror:'not work'})

   }
})
router.post('/',async(req,res)=>{
   try{
      const newtrip=await trip.create(req.body)
      res.json(newtrip)
   }catch(error){
      res.status(500).json({eror:'not work'})

   }
})
router.put('/:id',async(req,res)=>{
   try{
      const updatetrip=await trip.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.json(updatetrip)
   }catch(error){
      res.status(500).json({eror:'not work'})
   }
})
router.delete('/:id',async(req,res)=>{
   try{
      const deletetrip=await trip.findByIdAndDelete(req.params.id)

      res.json(deletetrip)
   }catch(error){
      res.status(500).json({eror:'not work'})
   }
})
module.exports=router