import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DashBoard from "./DashBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-slate-600"> hyyy</div>
      <DashBoard userId={"6409b512b7d5cfcf6cf10612"} />
    </>
  );
}
