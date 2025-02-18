import Image from "next/image";
import square from "../../public/square.svg";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import sketch from "../../public/tech-icons/sketch.svg";
import canva from "../../public/tech-icons/canva.svg";
import ai from "../../public/tech-icons/ai.svg";
import figma from "../../public/tech-icons/figma.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
// import cloud from "../../public/tech-icons/creativecloud.svg";
import framer from "../../public/tech-icons/framer.svg";
import github from "../../public/tech-icons/github.svg";
// import slack from "../../public/tech-icons/slack.svg";
import discord from "../../public/tech-icons/discord.svg";
import youtube from "../../public/tech-icons/youtube.svg";
import neon from "../../public/tech-icons/neon.svg";
import next from "../../public/tech-icons/next.svg";
import typescript from "../../public/tech-icons/typescript.svg";
import clerk from "../../public/tech-icons/clerk.jpeg";
import chrome from "../../public/tech-icons/chrome.svg";
// import pr from "../../public/tech-icons/pr.svg";
// import ps from "../../public/tech-icons/ps.svg";
// import notion from "../../public/tech-icons/notion.svg";
// import micro from "../../public/tech-icons/micro.svg";
import linkedin from "../../public/linkedin.svg";
import { Button } from "@/components/ui/button";

const icons = [
  {
    icon: next,
    name: "Next JS",
  },
  {
    icon: neon,
    name: "Neon",
  },
  {
    icon: typescript,
    name: "Typescript",
  },
  {
    icon: clerk,
    name: "Clerk",
  },
  {
    icon: canva,
    name: "Canva",
  },
  {
    icon: figma,
    name: "Figma",
  },
  {
    icon: chatgpt,
    name: "Chatgpt",
  },
  {
    icon: framer,
    name: "Framer",
  },
  {
    icon: github,
    name: "Github",
  },
  {
    icon: discord,
    name: "Discord",
  },
  {
    icon: youtube,
    name: "Youtube",
  },
  {
    icon: chrome,
    name: "Chrome",
  },

];

const socialMedia = [
  {
    id: 1,
    icon: github,
    name: "Github",
    username: "@Nitrowritescode",
    link: "https://github.com/Nitrowritescode",
  },
  {
    id: 2,
    icon: linkedin,
    name: "Linkedin",
    username: "@Swar Sehgal",
    link: "http://www.linkedin.com/in/swarsehgal",
  },
];

export function SectionTwo() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src='/condition.webp'
          alt="coding"
          width={400}
          height={600}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>Explore my stack</CardTitle>
            <CardDescription>Check out the tools i use daily</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
            {icons.map((item, index) => (
              <div key={index} className=" flex justify-left items-center ">
                <Image src={item.icon} alt="Icon"  className="w-16 h-16 mx-2" />
                <span className=" text-m font-semibold">{item.name}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
