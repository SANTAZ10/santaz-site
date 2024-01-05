import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div>
        <Main/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}
