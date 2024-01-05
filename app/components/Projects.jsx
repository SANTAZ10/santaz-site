import skysphereImg from "@/public/assets/projects/skysphere.PNG";
import notewriteImg from "@/public/assets/projects/notewrite.PNG";
import santazBlogImg from "@/public/assets/projects/santazblog.PNG";
import dataPulseImg from "@/public/assets/projects/datapulse.PNG";
import burgerhuntImg from "@/public/assets/projects/burgerhunt.png"
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-emerald-800">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="DataPulse"
            backgroundImg={dataPulseImg}
            projectUrl="/projectPages/dataPulse"
            stack="React Js"
          />
          <ProjectItem
            title="Skysphere"
            backgroundImg={skysphereImg}
            projectUrl="/projectPages/skysphere"
            stack="React Js"
          />
          <ProjectItem
            title="Notewrite"
            backgroundImg={notewriteImg}
            projectUrl="/projectPages/notewrite"
            stack="React Js"
          />
          <ProjectItem
            title="Santaz Blog"
            backgroundImg={santazBlogImg}
            projectUrl="/projectPages/santazBlog"
            stack="Next Js"
          />
          <ProjectItem
            title="Burger Hunt"
            backgroundImg={burgerhuntImg}
            projectUrl="/projectPages/burgerHunt"
            stack="Next Js"
          />
        </div>
      </div>
    </div>
  );
}
