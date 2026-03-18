import { connectDB } from "@/lib/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response("Invalid credentials", { status: 401 });
    }

    return new Response("Login successful", { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}