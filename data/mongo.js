import { MongoClient } from "mongodb";
import AppError from "../utils/appError";

export const dbConnect = async function () {
  try {
    if (process.env.NODE_ENV === "development") {
      return await MongoClient.connect(`mongodb://127.0.0.1:27017`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    //* production
    return await MongoClient.connect(
      `${process.env.mongodb_host}://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}/?retryWrites=true&w=majority`
    );
    // return await MongoClient.connect( "mongodb+srv://twohalls_user:tHrhaladmin@cluster0.wbsvj.mongodb.net/complete-guide?retryWrites=true&w=majority" );
  } catch (err) {
    // return undefined;
    console.log(err);
    throw new AppError(`Could not connect to database`, 500);
  }
};

export const closeMongoConnection = function (client) {
  !!client &&
    !!client.topology &&
    client.topology.isConnected() &&
    client.close();
};

export const getDocuments = async function (
  client,
  collection,
  filter = {},
  sortBy = {}
) {
  try {
    const db = client.db(process.env.mongodb_database);

    return await db.collection(collection).find(filter).sort(sortBy).toArray();
  } catch {
    return undefined;
  }
};
export const insertDocument = async function (client, collection, document) {
  try {
    const db = client.db(process.env.mongodb_database);
    return await db.collection(collection).insertOne(document);
  } catch (err) {
    return undefined;
  }
};
