import mongoose from "mongoose";
const connectToDb = async (): Promise<void> => {
  try {
    const connectionString: string = process.env.MONGOOSE_CONNECTION as string;
    console.log(connectionString);
    const connectionResult = await mongoose.connect(
      "mongodb+srv://adminn:adminn@cluster0.q8y0qjy.mongodb.net/globethrough?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to db successfully");
  } catch (e: unknown) {
    console.log(e);
  }
};

export default connectToDb;
