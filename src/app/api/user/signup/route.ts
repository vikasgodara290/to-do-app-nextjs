import { NextRequest, NextResponse } from "next/server";
import DbConnect from "@/app/lib/dbConfig";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";

export async function POST(req : NextRequest){
    const {username, email, password} = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await new User({
        username,
        email,
        password : hashedPassword
    }).save();

    console.log(newUser);

    return NextResponse.json({
        message : 'user successfully signed up!',
        success : true,
        newUser
    })
}