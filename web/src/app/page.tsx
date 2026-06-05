import type { Metadata } from "next";
import { getHomepageContent } from "@/lib/content/repository";
import { Homepage } from "@/components/Homepage";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getHomepageContent();
  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function HomePage() {
  const content = await getHomepageContent();
  return <Homepage content={content} />;
}
