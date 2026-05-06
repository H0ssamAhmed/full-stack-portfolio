import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db/dbConnection";
import Experience from "../../../lib/models/Experience.js";
import Project from "../../../lib/models/Project.js";
import Skill from "../../../lib/models/Skill.js";
import Certificate from "../../../lib/models/Certificate.js";

export async function GET() {
  try {
    await connectDB();
    const [experiences, projects, skills, certificates] = await Promise.all([
      Experience.find({ isPublished: true }),
      Project.find({ featured: true, isPublished: true })
        .limit(3)
        .sort({ createdAt: -1 }),
      Skill.find({ isPublished: true }),
      Certificate.find({ isPublished: true }),
    ]);

    return NextResponse.json({
      ok: true,
      data: { experiences, projects, skills, certificates },
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error.message },
      { status: 500 },
    );
  }
}
