import { NextResponse } from "next/server";

import { connectDB } from "@/database/service/mongodbConnection";
import { bookingModel } from "@/models/booking-model";
import mongoose from "mongoose";

export const POST = async (request) => {
    const { hotelId, userId, checkin, checkout } = await request.json();
    await connectDB();
    const payload = {
        hotelId: new mongoose.Types.ObjectId(hotelId),
        userId: new mongoose.Types.ObjectId(userId),
        checkin,
        checkout,
    };

    try {
        await bookingModel.create(payload);
        return new NextResponse("A New Booking has been made", {
            status: 201,
        });
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};
