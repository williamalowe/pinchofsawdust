import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const Logo = () => {
  return <div className={`${notoSerif.variable} font-headline text-2xl font-extrabold text-(--color-primary)`}>A Pinch Of Sawdust</div>;
};

export default Logo;
