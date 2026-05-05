import { connectDB } from "../../../lib/db/dbConnection";
import Project from "@/lib/models/Project";
import { NextResponse } from "next/server";

// GET all
export async function GET() {
  await connectDB();
  const projects = await Project.find();
  return NextResponse.json(projects);
}

// CREATE
export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();
  const project = await Project.create(body);

  return NextResponse.json(project);
}
