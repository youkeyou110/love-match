import { Geist } from "next/font/google";
import "./globals.css";
import RouteLoader from './components/RouteLoader';

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata = {
  title: "AI Love Match - 智能匹配，助你找到真爱",
  description: "基于AI技术的智能匹配系统，帮助您找到真正的灵魂伴侣。科学的测评体系，让爱情更有方向。",
  openGraph: {
    title: 'AI Love Match - 智能匹配',
    description: '基于AI技术的智能匹配系统',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className={`${geist.variable} font-sans antialiased`}>
        <RouteLoader />
        {children}
      </body>
    </html>
  );
}
