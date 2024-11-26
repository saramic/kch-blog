import { redirect } from "next/navigation";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ shortId: string }>;
}) {
  const { shortId } = use(params);
  const answers = {
    xyz: "game/0DD92EC6-1B34-469D-897B-87106FB7D790",
    abc: "game/31558C7E-9110-4F0E-B54A-00A8D7515919",
  };
  return answers[shortId] ? redirect(answers[shortId]) : redirect("/");
}
