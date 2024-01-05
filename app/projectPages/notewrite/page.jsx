import Image from "next/image";
import notewriteImg from "@/public/assets/projects/notewrite.PNG";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
export default function notewrite() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full bg-black/80 z-10 h-[30vh] lg:h-[40vh]" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={notewriteImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Notewrite</h2>
          <h3> React</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          I designed and developed a straightforward yet efficient notes application using ReactJS. The primary goal of this project was to provide users with a user-friendly interface for jotting down and saving notes. What sets this app apart is its capability to persist notes in local storage, ensuring that users' data remains intact even after a page refresh or when returning to the app.
          </p>
          <a href="https://notewrite.netlify.app/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>{" "}
          <a href="https://github.com/SANTAZ10/note-write" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
