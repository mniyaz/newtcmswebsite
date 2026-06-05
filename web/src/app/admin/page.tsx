import { isCmsAuthenticated } from "@/lib/auth/cms-auth";
import { getHomepageContent } from "@/lib/content/repository";
import { CmsEditor } from "@/components/admin/CmsEditor";
import { CmsLoginForm } from "@/components/admin/CmsLoginForm";

export const metadata = {
  title: "TCMS CMS | Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const authenticated = await isCmsAuthenticated();

  if (!authenticated) {
    return <CmsLoginForm />;
  }

  const content = await getHomepageContent();
  return <CmsEditor initialContent={content} />;
}
