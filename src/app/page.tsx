"use client";
import React, { useState } from "react";
import { TypewriterEffectSmooth } from "./components/typewriter";
import { WavyBackground } from "./components/wavy";
import { EvervaultCard, Icon } from "./components/encrypt-card";
import { MultiStepLoader as Loader } from "./components/step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { AnimatedTooltip } from "./components/tooltip";

const loadingStates = [
  {
    text: "Aug 2022 | Started M.S. in Computer Science at LMU",
  },
  {
    text: "May 2023 - Aug 2023 | Engineering Manager Intern at Develop for Good",
  },
  {
    text: "Aug 2023 - Nov 2023 | Student Software Developer at Willette Lab of Applied Ecology",
  },
  {
    text: "Aug 2023 - Oct 2023 | Computer Science Teaching Assistant at LMU",
  },
  {
    text: "Oct 2023 - Jan 2024 | Software Engineer Intern at Develop for Good",
  },
  {
    text: "Oct 2023 - May 2024 | Graduate Research Assistant for Embedded Software at LMU",
  },
  {
    text: "Jan 2024 - May 2024 | Software Engineer Intern at PropRise (YC S23)",
  },
  {
    text: "May 2024 - Graduated with M.S. in Computer Science from LMU",
  },
  {
    text: "August 2024 - Starting Software Engineer role at Fortune 500 company",
  },
];

const people = [
  {
    id: 1,
    name: "Github",
    designation: "@AaronFlore",
    image: "/github.png",
  },
  {
    id: 3,
    name: "Email",
    designation: "aaronfloreani@gmail.com",
    image: "/gmail.png",
  },
  {
    id: 2,
    name: "LinkedIn",
    designation: "Aaron Floreani",
    image: "/linkedin.png",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Hi, I'm Aaron Floreani
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Welcome to my portfolio! I'm a full-stack software engineer based in
          Los Angeles, CA.
        </p>
      </WavyBackground>
      <div className="w-full h-[20vh] flex items-center justify-center">
        {/* Core Loader Modal */}
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />
        <button
          onClick={() => setLoading(true)}
          className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-lg font-medium text-white backdrop-blur-3xl">
            View my Work Experience
          </span>
        </button>

        {loading && (
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        )}
      </div>
      <div className="flex items-center justify-center h-full mt-64">
        <TypewriterEffectSmooth
          words={[
            {
              text: "Projects",
            },
          ]}
        />
      </div>
      <div className="flex justify-center mt-4 mb-16">
        <a
          href="https://lyrichero.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-4 p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard
              text="LyricHero"
              gradientFrom="from-purple-500"
              gradientTo="to-pink-700"
            />
            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              In this web app, users type along to the synchronized lyrics of
              songs for a fun way to practice typing speed and accuracy.
            </h2>
            <div className="flex space-x-2">
              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                Vue.js
              </p>
              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                JavaScript
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://apps.apple.com/us/app/ascot-app/id6477841935"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-4 p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard
              text="Ascot"
              gradientFrom="from-green-500"
              gradientTo="to-blue-700"
            />
            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              This mobile app allows volunteers and researchers to track the
              survivability of 400 trees in LA's Ascot Hills Park via QR codes,
              scaling sustainability research.
            </h2>
            <div className="flex space-x-2">
              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                React Native
              </p>
              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                Firebase
              </p>
              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                JavaScript
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/AaronFlore/Finetuning-Llama2-Review-Summarizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-4 p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard
              text="LLaMA 2 Finetuning"
              gradientFrom="from-red-500"
              gradientTo="to-yellow-700"
            />
            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              This project demonstrates how to fine-tune LLaMA 2 for a specific
              use case, such as summarizing user reviews for amazon products
              into a single sentence.
            </h2>
            <div className="flex space-x-2">
              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                Jupyter Notebook
              </p>
              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                Meta Llama 2
              </p>
              <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                Python
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center mt-64 mb-10 w-full">
        <div className="flex flex-row items-center justify-center w-full">
          <AnimatedTooltip items={people} />
        </div>
        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          Connect with me
        </h2>
      </div>
    </>
  );
}
