import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { defaultHomepageContent } from "./default-content";
import { homepageContentSchema, type HomepageContent } from "./schema";

const CONTENT_DIR = path.join(process.cwd(), "content");
const CONTENT_FILE = path.join(CONTENT_DIR, "homepage.json");

async function ensureContentFile(): Promise<void> {
  await fs.mkdir(CONTENT_DIR, { recursive: true });

  try {
    await fs.access(CONTENT_FILE);
  } catch {
    await fs.writeFile(
      CONTENT_FILE,
      JSON.stringify(defaultHomepageContent, null, 2),
      "utf-8",
    );
  }
}

export async function getHomepageContent(): Promise<HomepageContent> {
  await ensureContentFile();

  const raw = await fs.readFile(CONTENT_FILE, "utf-8");
  const parsed = JSON.parse(raw) as unknown;
  return homepageContentSchema.parse(parsed);
}

export async function updateHomepageContent(
  content: HomepageContent,
): Promise<HomepageContent> {
  const validated = homepageContentSchema.parse(content);
  await ensureContentFile();
  await fs.writeFile(CONTENT_FILE, JSON.stringify(validated, null, 2), "utf-8");
  revalidatePath("/");
  return validated;
}

export async function resetHomepageContent(): Promise<HomepageContent> {
  return updateHomepageContent(defaultHomepageContent);
}
