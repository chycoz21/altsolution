import { useEffect, useState } from "react";
import "./index.scss";
import { SlickProject } from "./slick.project";
const ProjectSection = () => {
  const [getWitdh, setGetWitdh] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      const witdh = document.documentElement.clientWidth;
      setGetWitdh(witdh);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container-project marg-all">
      <div className="header-project">
        {console.log(`Lebar layar: ${getWitdh}px`)}
        <h1>Project</h1>
      </div>
      <div className="project">
        <SlickProject getWitdh={getWitdh} />
      </div>
    </section>
  );
};

export default ProjectSection;