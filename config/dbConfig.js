const {  mongoose } = require("mongoose");

module.exports.db = async ()=>{
    try {
        await mongoose.connect(process.env.DBURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected!")
      } catch (error) {
        console.log(error);
      }
}