import Tutorial from "../models/tutorial.model.js";


const create = (req, res)=>{
    if(!req.body.title){
        res.status(400).send("Can't be empty !");
        return;
    }
    const tutorial = new Tutorial({
        title : req.body.title,
        description : req.body.description,
        published : req.body.published ? req.body.published : false
    });

    tutorial
        .save()
        .then(data=>{
            console.log(data);
            res.send(data);
        })
        .catch((err)=>{
            res.status(500).send({
                message:
                  err.message || "Some error occurred while saving tutorials."
              })   
        })
};

const findOne = (req, res)=>{
    const id = req.params.id;

    Tutorial.findById(id)
        .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
        })
        .catch(err => {
        res
            .status(500)
            .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};



const findAll = (req, res)=>{
    Tutorial.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message 
            });
        });
    
};


const update =  (req, res)=>{

    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

    const id = req.params.id;
    const newValues = req.body;
    const options = {new : true};
    Tutorial.findByIdAndUpdate(id, newValues,options)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(500).send("Error while updating data.");
        });

};

const deleteOne = (req, res)=>{
    const id = req.params.id;

    Tutorial.findByIdAndDelete(id)
        .then(()=> res.send(`Data with ${id} has been deleted`))
        .catch(err => console.log(err.message));

};
   

const findAllPublished = (req, res)=>{

    Tutorial.findOne({ "published" : true})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err.message)
        });
    
}

export default {findOne, create,findAll,update,deleteOne,findAllPublished};






// const deleteAll =(req, res){

// };

