import DOMPurify from "isomorphic-dompurify";
import { getPage, stack } from "@/lib/contentstack";
import { headers } from "next/headers";
import Image from "next/image";
import { LandingPage } from "@/components/LandingPage";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  await headers();
  const { live_preview, entry_uid, content_type_uid } = await searchParams;

  if (live_preview) {
    stack.livePreviewQuery({
      live_preview,
      contentTypeUid: content_type_uid || "",
      entryUid: entry_uid || "",
    });
  }

  const page = await getPage("/products/scooter-model-a");

  return (
    <LandingPage data={page} />
  );
}
