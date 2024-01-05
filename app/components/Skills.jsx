import Image from "next/image";
import htmlImg from "@/public/assets/skills/html.png";
import cssImg from "@/public/assets/skills/css.png";
import jsImg from "@/public/assets/skills/javascript.png";
import nextImg from "@/public/assets/skills/nextjs.png";
import reactImg from "@/public/assets/skills/react.png";
import tailwindImg from "@/public/assets/skills/tailwind.png";
import nodeImg from "@/public/assets/skills/node.png";
import firebaseImg from "@/public/assets/skills/firebase.png";
import github1Img from "@/public/assets/skills/github1.png";

export default function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-emerald-800">Skills</p>
        <h2 className="py-4">My Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={htmlImg} alt="stack image" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={cssImg} alt="stack image" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={jsImg} alt="stack image" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={reactImg} alt="stack image" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={nextImg} alt="stack image" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nextjs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={tailwindImg} alt="stack image" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={nodeImg} alt="stack image" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={firebaseImg} alt="stack image" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
              <div className="m-auto">
                <Image src={github1Img} alt="stack image" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
