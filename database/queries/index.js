import { hotelModel } from "@/models/hotel-model";
import { replaceMongoIdInArray } from "@/utils/data-util";
import { connectDB } from "../service/mongodbConnection";

export async function getAllHotels() {
    await connectDB();
    const hotels = await hotelModel.find().lean();

    return replaceMongoIdInArray(hotels);
}
