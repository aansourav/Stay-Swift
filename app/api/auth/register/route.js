import { connectDB } from "@/database/service/mongodbConnection";
import { userModel } from "@/models/user-model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    const { fname, lname, email, password } = await req.json();

    await connectDB();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
        name: `${fname} ${lname}`,
        email,
        password: hashedPassword,
    };

    try {
        await userModel.create(user);
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};
