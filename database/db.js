import mongoose from "mongoose";

const Connection = async (user, Passowd) => {
    const uri = `mongodb+srv://${user}:${Passowd}@cluster0.0xt65zg.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true

        })
        console.log("db is connected");
    } catch (error) {
        console.log("dfkjjgvjuger", error.message)
    }

}
export default Connection;