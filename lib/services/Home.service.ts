import { connectDB } from "../db/dbConnection";
import Experience from "../models/Experience.js";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";
import Certificate from "../models/Certificate.js";

export async function getHomeService() {
  await connectDB();

  const [experiences, projects, skills, certificates] = await Promise.all([
    Experience.find({ isPublished: true }),
    Project.find({ featured: true, isPublished: true })
      .limit(3)
      .sort({ createdAt: -1 }),
    Skill.find({ isPublished: true }),
    Certificate.find({ isPublished: true }),
  ]);

  return { experiences, projects, skills, certificates };
}
