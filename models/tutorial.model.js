import mongoose from "mongoose";

// mongoose.Promise = global.Promise;
const mongoURL = "mongodb://localhost:27017/tutorialsDB";

mongoose.connect(mongoURL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>{
        console.log("Conected to database....");
    })
    .catch((err)=>{
        console.log(err);
        process.exit();
    });

    const schema = mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      {
        toJSON: {
          transform: function(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
          }
        },
        timestamps: true,versionKey : false
      }
      
    );

    
    const Tutorial = mongoose.model("Tutorial", schema);
  
    
    
export default Tutorial;

