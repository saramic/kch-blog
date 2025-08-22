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
    aHI: "game/0B9396ED-786E-40B0-85D5-3F52D92B6EB7",
    Bdw: "game/5792B0FB-A02F-4E79-9B47-9DA534681252",
    UhQ: "game/B0F1CCC2-F100-499D-9F64-3DAA54C526FB",
    v4g: "game/2EC71D74-5D5B-49DD-8FE2-35C5D3D2CCBE",
    gaw: "game/38F37790-9006-4EE3-8932-92267A2A4A9C",
    P6Y: "game/82F29E45-1E70-4FE1-AD8E-5A6849340019",
    iFN: "game/D2918761-2ED6-4250-9A49-753AF9688E73",
    iFo: "game/C851222D-5D8A-4919-9E1D-D8F972AD6012",
    es4: "game/69536812-B4BE-4264-9E9C-5E681D021814",
    f9U: "game/69C8E074-24D7-424E-9E09-A77D6DC3A9D3",
    TNo: "game/A824C319-F53D-4AE8-9C04-2D39D4E7FA3A",
    chor: "choir",
    spiew: "song",
  };
  return answers[shortId] ? redirect(answers[shortId]) : redirect("/");
}
