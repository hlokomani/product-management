import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <h1>Welcome to the Product Management App</h1>
      <p>This is the home page of your application.</p>
    </div>
  );
}