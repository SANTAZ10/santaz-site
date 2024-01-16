import Image from "next/image";
import santazAdminImg from "@/public/assets/projects/santazadmin.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
export default function santazblog() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full bg-black/80 z-10 h-[30vh] lg:h-[40vh]" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={santazAdminImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Santaz Admin</h2>
          <h3>React Js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          I crafted a responsive admin dashboard, leveraging ReactJS, Recharts, SCSS, and Material-UI. This project focused on delivering an intuitive and feature-packed interface for data visualization, analytics, and project management.
          </p>
          <a href="https://santaz-admin.vercel.app/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>{" "}
          <a href="https://github.com/SANTAZ10/santaz-admin" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                scss
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Recharts
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Recharts
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Material UI
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
