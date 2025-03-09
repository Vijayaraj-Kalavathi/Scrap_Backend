// const mongoose =  require('mongoose');

// const connectDataBase = ()=>{
//     mongoose.connect(process.env.DB_LOCAL_URI,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     }).then((res)=>{
//         console.log(`mongoDB Connected to the host ${res.connection.host}`)
//     }).catch((err)=>{
//    console.log("error",err);
//     })
// }

// module.exports = connectDataBase;



const mongoose = require('mongoose');

const connectDataBase = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_LOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected to the host: ${conn.connection.host}`);
        return conn.connection.db; // Return the database instance
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDataBase;