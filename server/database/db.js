import mongoose from "mongoose";

const Connection = async ()=>{
    const URL = `mongodb://pro_panda18:online_log@ac-10t1fvm-shard-00-00.01h1yso.mongodb.net:27017,ac-10t1fvm-shard-00-01.01h1yso.mongodb.net:27017,ac-10t1fvm-shard-00-02.01h1yso.mongodb.net:27017/?ssl=true&replicaSet=atlas-d0m4x0-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;