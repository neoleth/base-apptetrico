const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * MiniApp configuration object for Farcaster MiniApps.
 * Updated version for Block Drop TETRİCO with baseBuilder and accountAssociation.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
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
    splashImageUrl:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/farcaster/splash_images/splash_image1.svg",
    splashBackgroundColor: "#ffffff",
    homeUrl: "https://speech-complete-058.app.ohara.ai",
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "games",
    tags: ["tetris", "block", "puzzle", "arcade", "farcaster"],
    heroImageUrl:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/farcaster/splash_images/splash_image1.svg",
    tagline: "Play Tetris anywhere — powered by Farcaster.",
    ogTitle: "TETRİCO",
    ogDescription:
      "Drop, rotate, and clear lines in this smooth Tetris experience for Farcaster users.",
    ogImageUrl:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/farcaster/splash_images/splash_image1.svg",
  },
} as const;
