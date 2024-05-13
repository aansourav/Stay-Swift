import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import mongoClientPromise from "./database/mongoClientPromise";
import { connectDB } from "./database/service/mongodbConnection";
import { userModel } from "./models/user-model";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, {
        databaseName: process.env.ENVIRONMENT,
    }),
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials) {
                console.log(credentials);
                if (credentials == null) return null;

                try {
                    await connectDB();
                    const user = await userModel.findOne({
                        email: credentials.email,
                    });
                    if (user) {
                        const isMatch = bcrypt.compareSync(
                            credentials.password,
                            user.password
                        );
                        if (isMatch) {
                            return user;
                        } else {
                            throw Error("Email or password mismatch");
                        }
                    } else {
                        throw Error("User not found");
                    }
                } catch (error) {
                    throw Error(error.message);
                }
            },
        }),
    ],
});
