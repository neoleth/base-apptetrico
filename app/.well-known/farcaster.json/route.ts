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
        "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/farcaster/splash_images/splash_image1.svg",
      splashBackgroundColor: "#ffffff",
      homeUrl: "https://speech-complete-058.app.ohara.ai",
      webhookUrl: "https://base-apptetrico.vercel.app/api/webhook",
      primaryCategory: "games",
      tags: ["tetris", "block", "puzzle", "arcade", "farcaster"],
      heroImageUrl:
        "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/farcaster/splash_images/splash_image1.svg",
      tagline: "Play Tetris anywhere — powered by Farcaster.",
      ogTitle: "TETRİCO",
      ogDescription:
        "Drop, rotate, and clear lines in this smooth Tetris experience for Farcaster users.",
      ogImageUrl:
        "https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-ac90-620a-b252-6a585bfb0877/raw?se=2025-10-07T18%3A30%3A40Z&sp=r&sv=2024-08-04&sr=b&scid=5726e9d5-2c41-5784-941d-9afee0505d94&skoid=82a3371f-2f6c-4f81-8a78-2701b362559b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-07T18%3A16%3A24Z&ske=2025-10-08T18%3A16%3A24Z&sks=b&skv=2024-08-04&sig=bOpjfNNmrEeCmvcstYPLlvqIUAdlKBIyjgFSHmfZO3E%3D",
    },
  };

  return NextResponse.json(manifest, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
