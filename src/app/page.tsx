import { getSortedPostsData } from "@/lib/writings";
import Image from "next/image";
import Link from "next/link";
import { Libre_Baskerville } from "next/font/google";

const serif = Libre_Baskerville({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <main className="bg-white text-black text-left flex h-screen flex-col max-w-2xl mx-auto animated p-8 lg:p-0">
        <section className="flex flex-col h-screen justify-center items-center gap-4 mb-8 mt-8">
          <p className={`text-2xl ${serif.className}`}>
            Hi, I'm <span className="text-[#048647]">Yusra</span> – a software
            engineer focusing on sustainability strategy & analysis, with
            experience delivering complex software projects. I'm passionate
            about driving social & environmental impact through innovative
            solutions & strategic thinking.
          </p>

          <p className={`mt-16 text-lg ${serif.className}`}>
            Reach out via{" "}
            <a
              href="https://www.linkedin.com/in/yusra-syeda/"
              className="transition-all ease-in-out text-[#048647] border-b border-[#048647] hover:opacity-60"
            >
              Linkedin
            </a>{" "}
            if you'd like to talk about green intiatives & sustainability
            projects!
          </p>
        </section>
      </main>
    </div>
  );
}
