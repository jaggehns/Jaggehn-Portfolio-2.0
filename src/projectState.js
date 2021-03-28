//Import Images
import travelly from "./img/travelly.png";
import travelly1 from "./img/travelly1.png";
import coloors from "./img/coloors.png";
import photon from "./img/photon.png";
import photon1 from "./img/photon1.png";

export const ProjectState = () => {
  return [
    {
      title: "Travelly",
      mainImg: travelly,
      secondaryImg: travelly1,
      url: "/work/travelly",
      awards: [
        {
          title: "About",
          description:
            "“A travel agency website utilizing HTML5 and CSS3 for a clean, elegant design.”",
        },
        {
          title: "Website",
          description: (
            <div>
              <a
                style={{ color: "white" }}
                href="https://travelly-jaggehn.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here!
              </a>
            </div>
          ),
        },
        {
          title: "GitHub",
          description: (
            <div>
              <a
                style={{ color: "white" }}
                href="https://github.com/jaggehns/Travelly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here!
              </a>
            </div>
          ),
        },
      ],
    },
    {
      title: "Photon",
      mainImg: photon,
      url: "/work/photon",
      secondaryImg: photon1,
      awards: [
        {
          title: "About",
          description:
            "“A photo searching app fetching an external API (Pexels). HTML5, CSS3 & Vanilla JavaScript.”",
        },
        {
          title: "Website",
          description: (
            <div>
              <a
                style={{ color: "white" }}
                href="https://jaggehn-photon.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here!
              </a>
            </div>
          ),
        },
        {
          title: "GitHub",
          description: (
            <div>
              <a
                style={{ color: "white" }}
                href="https://github.com/jaggehns/Photon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here!
              </a>
            </div>
          ),
        },
      ],
    },
    {
      title: "Coloors",
      mainImg: coloors,
      url: "/work/coloors",
      secondaryImg: coloors,
      awards: [
        {
          title: "About",
          description:
            "“A color generating app with storage system developed using HTML5, CSS and Vanilla JavaScript.”",
        },
        {
          title: "Website",
          description: (
            <div>
              <a
                style={{ color: "white" }}
                href="https://coloors-jaggehn.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here!
              </a>
            </div>
          ),
        },
        {
          title: "GitHub",
          description: (
            <div>
              <a
                style={{ color: "white" }}
                href="https://github.com/jaggehns/Coloors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here!
              </a>
            </div>
          ),
        },
      ],
    },
  ];
};
