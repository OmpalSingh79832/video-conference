import mongoose from "mongoose";
import dotenv from 'dotenv';

// dotenv.config();

const DBConnection = async() => {
    // const USERNAME = process.env.DB_USERNAME;
    // const PASSWORD = process.env.DB_PASSWORD;

    // const MONGO_URI = `mongodb://ersurya:surajsingh@ac-7t6oebi-shard-00-00.mmcpg6s.mongodb.net:27017,ac-7t6oebi-shard-00-01.mmcpg6s.mongodb.net:27017,ac-7t6oebi-shard-00-02.mmcpg6s.mongodb.net:27017/?ssl=true&replicaSet=atlas-10jnc3-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const MONGO_URI = `mongodb://localhost:27017/Fileupload`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;