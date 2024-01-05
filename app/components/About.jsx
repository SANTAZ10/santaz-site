import Image from "next/image";
import aboutImg from "@/public/assets/about.jpg"
export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-emerald-800">About</p>
          <p className="py-2 text-gray-600">
            I'm a dedicated frontend web developer with two years of experience, deeply passionate
            about creating captivating user interfaces and delivering exceptional user experiences.
            I thrive on the challenges of turning design concepts into interactive, user-friendly
            websites and applications. Committed to continuous learning and staying at the forefront
            of frontend technologies to craft cutting-edge solutions.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my projects</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
            <Image className="rounded-xl" src={aboutImg} alt="laptop image" width={1000} height={1000}/>
        </div>

      </div>
    </div>
  );
}
