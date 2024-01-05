import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-emerald-800"> Santaz</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Frontend Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a Frontend developer with a passion for crafting seamless user experiences.
            Aspiring to master backend tech and delve into blockchain development.
          </p>
          <div className="flex max-w-[330px] items-center justify-between m-auto py-4">
          <Link href="mailto:fagbolasamuel.sf@gmail.com" target={"blank"}>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link target="_blank"
                    href="https://www.linkedin.com/in/samuel-fagbola-21045b1b3/"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedin />
                    </div>
                  </Link>
                  <Link target="_blank"
                    href="https://github.com/SANTAZ10">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="https://wa.me/+2348111211953" target={"blank"}>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsWhatsapp />
                    </div>
                  </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
