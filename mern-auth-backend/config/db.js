const mongoose = require("mongoose");

const uri =
  "mongodb+srv://maimunawahaibi:Al0JOMTtDS2CPhQL@cluster0.dmmwkcy.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(uri, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});
		console.log(`MongoDB connected ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

module.exports = connectDB;
