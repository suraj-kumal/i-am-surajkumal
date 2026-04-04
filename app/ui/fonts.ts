import { Weight } from "lucide-react";
import { Libre_Baskerville } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
export const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const SpaceGrotesk = Space_Grotesk({
  weight: "variable",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
