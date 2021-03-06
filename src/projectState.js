//Import Images
import travelly from "./img/travelly.png";
import travelly1 from "./img/travelly1.png";
import elena from "./img/elena.png";
import elena1 from "./img/elena1.png";
import coloors from "./img/coloors.png";
import photon from "./img/photon.png";
import photon1 from "./img/photon1.png";
import fb from "./img/fb.png";
import fb2 from "./img/fb2.png";
import covid1 from "./img/covid.png";
import covid2 from "./img/covid2.png";

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
            "“A photo searching app fetching an external API (Pexels). HTML5, CSS3 & Vanilla JavaScript (Async).”",
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
            "“A color generating app with storage system developed using HTML5, CSS3 and Vanilla JavaScript.”",
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
    {
      title: "FB Messenger Clone",
      mainImg: fb,
      url: "/work/fbclone",
      secondaryImg: fb2,
      awards: [
        {
          title: "About",
          description:
            "“A Facebook Messenger Clone utilizing React JS, Material UI & Firebase.”",
        },
        {
          title: "Website",
          description: (
            <div>
              <a
                style={{ color: "white" }}
                href="https://fb-messenger-react-fireb-b78d6.web.app/"
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
                href="https://github.com/jaggehns/FB-Messenger-React-Firebase"
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
      title: "COVID-19 Tracker",
      mainImg: covid1,
      url: "/work/covidtracker",
      secondaryImg: covid2,
      awards: [
        {
          title: "About",
          description:
            "“A COVID-19 worldwide tracker utilzing React JS, Material UI, Chart JS, Leaflet & Firebase.”",
        },
        {
          title: "Website",
          description: (
            <div>
              <a
                style={{ color: "white" }}
                href="https://covid-tracker-jaggehn.web.app/"
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
                href="https://github.com/jaggehns/COVID-19-Tracker-React"
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
      title: "Elena Joy",
      mainImg: elena,
      url: "/work/elena",
      secondaryImg: elena1,
      awards: [
        {
          title: "About",
          description:
            "“A photography website utilizing HTML5, CSS3 and Vanilla JavaScript with an emphasis on CSS Grid.”",
        },
        {
          title: "Website",
          description: (
            <div>
              <a
                style={{ color: "white" }}
                href="https://elena-joy-photography-jaggehn.netlify.app/"
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
                href="https://github.com/jaggehns/Elena-Joy-Photography"
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
