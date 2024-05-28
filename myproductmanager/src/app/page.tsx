'use client'
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/products");
  }, [router]);

  return null;
}