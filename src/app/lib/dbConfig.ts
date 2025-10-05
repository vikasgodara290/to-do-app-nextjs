import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

export default async function DbConnect() {
    try {
        mongoose.connect(MONGODB_URL!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('mongodb connected successfully!');
        });

        connection.on('error', () => {
            console.log('something went wrong while connecting with database!')
        });
    } catch (error) {
        console.log('something went wrong! ' + error);
    }
}
