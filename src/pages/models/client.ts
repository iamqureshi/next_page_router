import mongoose from "mongoose";

interface IClient {
    name: string;
    age: string;
    companyName: string;
}

const clientSchema = new mongoose.Schema<IClient>({
    age: Number,
    name: String,
    companyName: String
});

const clientModel = mongoose.model('client', clientSchema)
export default clientModel;