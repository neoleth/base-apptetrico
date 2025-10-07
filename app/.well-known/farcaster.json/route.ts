import { NextResponse } from "next/server";

export async function GET() {
  const manifest = {
    accountAssociation: {
      header:
        "eyJmaWQiOjEwMzQ4MTMsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhEZDRhNTMwNTFCOWE2OEVBMjJkYkFENDY5OTI5MTg3ODkyRGQyMTU1In0",
      payload:
        "eyJkb21haW4iOiJiYXNlLWFwcHRldHJpY28udmVyY2VsLmFwcCJ9",
      signature:
        "MHgzMThkNDRkMzVhMmYzZjk3NmRlMmFkNjk3ZjkwNjExNmZiOTFmNmYwMzI5NDA2MDE4MTA3YzNhYjIyODQ5MDlhNjAxYWMwNzI5OTAyZGNlZGVkODk0ZTUyMDQxNWI0NjI1OTg0NTYzZDExODE5YWNiYWI4ZmJlM2FjMTk1NjVjYjFj",
    },

    baseBuilder: {
      allowedAddresses: ["0xc13E22aa3C5487eEAF2da8a5ebc91a5FD9A72701"],
    },

    miniapp: {
      version: "1",
      name: "TETRİCO",
      subtitle: "Stack the blocks, challenge the AI!",
      description:
        "A modern Tetris experience with smooth gameplay, built on Farcaster MiniApps.",
      screenshotUrls: [
        "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/thumbnail_1b157526-9626-49e1-8979-d2922acffca8-XOgckv5QL2WyC38vXxtimkHDMykSo5",
      ],
      iconUrl:
        "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/farcaster/splash_images/splash_image1.svg",
      imageUrl:
        "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/thumbnail_1b157526-9626-49e1-8979-d2922acffca8-XOgckv5QL2WyC38vXxtimkHDMykSo5",
      splashImageUrl:
        "https://ibb.co/spz0xSZ1",
      splashBackgroundColor: "#ffffff",
      homeUrl: "https://speech-complete-058.app.ohara.ai",
      webhookUrl: "https://base-apptetrico.vercel.app/api/webhook",
      primaryCategory: "games",
      tags: ["tetris", "block", "puzzle", "arcade", "farcaster"],
      heroImageUrl:
        "https://ibb.co/spz0xSZ1",
      tagline: "Play Tetris anywhere — powered by Farcaster.",
      ogTitle: "TETRİCO",
      ogDescription:
        "Drop, rotate, and clear lines in this smooth Tetris experience for Farcaster users.",
      ogImageUrl:
        "https://ibb.co/spz0xSZ1",
    },
  };

  return NextResponse.json(manifest, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
