"use client";
import Header from "@/components/Header";
import React from "react";

import {
  Code2,
  Database,
  Server,
  Globe,
  Palette,
  GitBranch,
  Languages,
  Wrench,
} from "lucide-react";

const page = () => {
  const skillsData = {
    usingNow: [
      {
        name: "REACT",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 64 64"
            className="w-8 h-8 rounded flex items-center justify-center text-white text-xs font-bold"
          >
            <linearGradient
              id="9GkdZLxQa1XTDblOFwLcpa_t4YbEbA834uH_gr1"
              x1="32"
              x2="32"
              y1="25.213"
              y2="36.722"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#6dc7ff"></stop>
              <stop offset="1" stopColor="#e6abff"></stop>
            </linearGradient>
            <circle
              cx="32"
              cy="32"
              r="6"
              fill="url(#9GkdZLxQa1XTDblOFwLcpa_t4YbEbA834uH_gr1)"
            ></circle>
            <linearGradient
              id="9GkdZLxQa1XTDblOFwLcpb_t4YbEbA834uH_gr2"
              x1="32"
              x2="32"
              y1="7.426"
              y2="53.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#1a6dff"></stop>
              <stop offset="1" stop-color="#c822ff"></stop>
            </linearGradient>
            <path
              fill="url(#9GkdZLxQa1XTDblOFwLcpb_t4YbEbA834uH_gr2)"
              d="M58,32c0-3.758-4.243-7.017-10.853-8.992c0.221-1.031,0.407-2.045,0.524-3.015	c0.657-5.483-0.483-9.323-3.211-10.813c-2.729-1.489-6.574-0.372-10.831,3.146c-0.544,0.449-1.087,0.938-1.629,1.45	c-0.542-0.513-1.085-1.001-1.629-1.45C26.114,8.808,22.267,7.692,19.54,9.18c-2.728,1.489-3.868,5.329-3.211,10.813	c0.116,0.971,0.303,1.984,0.524,3.015C10.243,24.983,6,28.242,6,32s4.243,7.017,10.853,8.992c-0.221,1.031-0.407,2.045-0.524,3.015	c-0.657,5.483,0.483,9.323,3.211,10.813c0.789,0.431,1.67,0.643,2.628,0.643c2.357,0,5.177-1.287,8.203-3.788	c0.544-0.449,1.087-0.938,1.629-1.45c0.542,0.513,1.085,1.001,1.629,1.45c3.026,2.501,5.846,3.788,8.203,3.788	c0.958,0,1.84-0.213,2.628-0.643c2.728-1.489,3.868-5.329,3.211-10.813c-0.116-0.971-0.303-1.984-0.524-3.015	C53.757,39.017,58,35.758,58,32z M34.902,13.866c3.53-2.917,6.665-3.987,8.599-2.931c1.934,1.055,2.729,4.27,2.184,8.818	c-0.105,0.879-0.273,1.796-0.469,2.729c-2.117-0.519-4.43-0.915-6.892-1.166c-1.564-2.275-3.215-4.351-4.908-6.132	C33.91,14.718,34.406,14.276,34.902,13.866z M39.899,36.313c-0.853,1.562-1.76,3.055-2.702,4.474C35.546,40.925,33.811,41,32,41	s-3.546-0.075-5.198-0.213c-0.941-1.42-1.849-2.912-2.702-4.474c-0.784-1.435-1.499-2.878-2.142-4.313	c0.643-1.434,1.358-2.877,2.142-4.313c0.853-1.562,1.76-3.055,2.702-4.474C28.454,23.075,30.189,23,32,23s3.546,0.075,5.198,0.213	c0.941,1.42,1.849,2.912,2.702,4.474c0.784,1.435,1.499,2.878,2.142,4.313C41.399,33.434,40.683,34.877,39.899,36.313z M43.078,34.487c0.68,1.739,1.238,3.444,1.676,5.096c-1.544,0.376-3.21,0.694-5.009,0.929c0.657-1.05,1.3-2.124,1.909-3.241	C42.161,36.346,42.629,35.416,43.078,34.487z M32,47.403c-1.272-1.341-2.522-2.863-3.729-4.513C29.487,42.961,30.73,43,32,43	s2.513-0.039,3.729-0.11C34.522,44.54,33.272,46.062,32,47.403z M24.254,40.512c-1.799-0.235-3.465-0.553-5.009-0.929	c0.438-1.652,0.996-3.358,1.676-5.096c0.45,0.93,0.918,1.859,1.423,2.785C22.954,38.388,23.597,39.462,24.254,40.512z M20.922,29.513c-0.68-1.739-1.238-3.445-1.676-5.096c1.544-0.376,3.21-0.694,5.009-0.929c-0.657,1.05-1.3,2.124-1.909,3.241	C21.839,27.654,21.371,28.584,20.922,29.513z M32,16.597c1.272,1.341,2.522,2.863,3.729,4.513C34.513,21.039,33.27,21,32,21	s-2.513,0.039-3.729,0.11C29.478,19.46,30.728,17.938,32,16.597z M41.655,26.729c-0.609-1.116-1.252-2.19-1.909-3.241	c1.799,0.235,3.465,0.553,5.009,0.929c-0.438,1.652-0.996,3.358-1.676,5.096C42.629,28.584,42.161,27.654,41.655,26.729z M18.315,19.754c-0.546-4.549,0.25-7.764,2.184-8.818c0.488-0.267,1.053-0.397,1.681-0.397c1.86,0,4.278,1.147,6.918,3.328	c0.496,0.41,0.993,0.852,1.488,1.319c-1.693,1.781-3.345,3.856-4.908,6.132c-2.463,0.251-4.776,0.648-6.892,1.166	C18.588,21.55,18.421,20.633,18.315,19.754z M8,32c0-2.6,3.47-5.303,9.317-7.06c0.606,2.279,1.437,4.654,2.471,7.06	c-1.034,2.407-1.865,4.782-2.471,7.06C11.47,37.303,8,34.6,8,32z M29.098,50.134c-3.53,2.917-6.662,3.989-8.599,2.931	c-1.934-1.055-2.729-4.27-2.184-8.818c0.105-0.879,0.273-1.796,0.469-2.729c2.117,0.519,4.43,0.915,6.892,1.166	c1.564,2.275,3.215,4.351,4.908,6.132C30.09,49.282,29.594,49.724,29.098,50.134z M45.685,44.246	c0.546,4.549-0.25,7.764-2.184,8.818c-1.934,1.059-5.068-0.014-8.599-2.931c-0.496-0.41-0.993-0.852-1.488-1.319	c1.693-1.781,3.345-3.856,4.908-6.132c2.463-0.251,4.776-0.648,6.892-1.166C45.412,42.45,45.579,43.367,45.685,44.246z M46.683,39.06c-0.606-2.279-1.437-4.654-2.471-7.06c1.034-2.407,1.865-4.782,2.471-7.06C52.53,26.697,56,29.4,56,32	S52.53,37.303,46.683,39.06z"
            ></path>
          </svg>
        ),

        color: "orange",
      },
      {
        name: "CSS3",
        icon: <Palette className="w-8 h-8 text-blue-500" />,
        color: "blue",
      },
      {
        name: "NEXT js",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="w-8 h-8 rounded flex items-center justify-center text-white text-xs font-bold"
          >
            <path
              fill="#212121"
              d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
            ></path>
          </svg>
        ),
        color: "pink",
      },
      {
        name: "JAVASCRIPT",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="w-8 h-8  rounded flex items-center justify-center text-black text-m font-bold"
          >
            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
            <path
              fill="#000001"
              d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
            ></path>
          </svg>
        ),
        color: "yellow",
      },
      {
        name: "HTML5",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="w-8 h-8  rounded flex items-center justify-center text-black text-m font-bold"
          >
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
            ></path>
            <path
              fill="#EEE"
              d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
            ></path>
          </svg>
        ),
        color: "cyan",
      },
      {
        name: "BOOTSTRAP",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="w-8 h-8  rounded flex items-center justify-center text-black text-m font-bold"
          >
            <path
              fill="#6c19ff"
              d="M6.391,10.671c-0.085-2.448,1.822-4.706,4.401-4.706h26.42c2.578,0,4.486,2.258,4.401,4.706	c-0.082,2.352,0.024,5.398,0.791,7.882c0.769,2.492,2.066,4.067,4.19,4.269v2.295c-2.124,0.202-3.421,1.777-4.19,4.269	c-0.767,2.484-0.873,5.53-0.791,7.882c0.085,2.448-1.822,4.706-4.401,4.706h-26.42c-2.578,0-4.486-2.258-4.4-4.706	c0.082-2.352-0.025-5.398-0.791-7.882c-0.769-2.492-2.069-4.067-4.194-4.269v-2.295c2.124-0.202,3.425-1.777,4.194-4.269	C6.367,16.07,6.473,13.023,6.391,10.671z"
            ></path>
            <linearGradient
              id="Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1"
              x1="17.846"
              x2="27.078"
              y1="-147.541"
              y2="-163.153"
              gradientTransform="matrix(1 0 0 -1 0 -132)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fff"></stop>
              <stop offset="1" stop-color="#f1e5fc"></stop>
            </linearGradient>
            <path
              fill="url(#Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1)"
              d="M25.042,34.016c4.366,0,6.997-2.138,6.997-5.664c0-2.665-1.877-4.595-4.665-4.9v-0.111	c2.048-0.333,3.655-2.235,3.655-4.359c0-3.026-2.389-4.997-6.03-4.997h-8.192v20.031H25.042z M19.994,16.525h4.238	c2.304,0,3.612,1.027,3.612,2.887c0,1.985-1.522,3.096-4.281,3.096h-3.57V16.525z M19.994,31.475v-6.594h4.21	c3.015,0,4.579,1.11,4.579,3.276c0,2.165-1.522,3.318-4.394,3.318H19.994z"
            ></path>
          </svg>
        ),
        color: "purple",
      },
      {
        name: "GIT",
        icon: <GitBranch className="w-8 h-8 text-red-500" />,
        color: "red",
      },
      {
        name: "Tailwind CSS",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="w-8 h-8  rounded flex items-center justify-center text-black text-m font-bold"
          >
            <path
              fill="#00acc1"
              d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
            ></path>
          </svg>
        ),
      },
      {
        name: "Express Js",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="w-8 h-8 rounded flex items-center justify-center text-white text-xs font-bold"
          >
            <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
          </svg>
        ),
        color: "purple",
      },
      {
        name: "NODE.JS",
        icon: <Server className="w-8 h-8 text-green-600" />,
        color: "green",
      },
      {
        name: "Ant Design",
        icon: <Database className="w-8 h-8 text-blue-600" />,
        color: "blue",
      },
      {
        name: "MONGODB",
        icon: <Database className="w-8 h-8 text-green-500" />,
        color: "green",
      },
    ],
  };

  const SkillCard = ({ skill, index }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, index * 100);
      return () => clearTimeout(timer);
    }, [index]);

    return (
      <div
        className={`flex flex-col items-center space-y-2 p-4 cursor-pointer transition-all duration-300 transform ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-5 scale-90"
        } ${isHovered ? "scale-105 -translate-y-2" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`flex items-center justify-center w-12 h-12  rounded-lg shadow-sm transition-all duration-300 ${
            isHovered ? "shadow-lg" : ""
          }`}
        >
          <div
            className={`transition-transform duration-500 ${
              isHovered ? "rotate-360" : ""
            }`}
            style={{
              transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
            }}
          >
            {skill.icon}
          </div>
        </div>
        <span
          className={`text-xs font-medium text-gray-700 text-center leading-tight transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: `${index * 100 + 200}ms`,
          }}
        >
          {skill.name}
        </span>
      </div>
    );
  };

  const SectionTitle = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <h2
        className={`text-sm font-bold tracking-wider mb-6 text-gray-800 transition-all duration-600 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
        }`}
        style={{
          letterSpacing: isVisible ? "0.15em" : "0.1em",
        }}
      >
        {children}
      </h2>
    );
  };

  const [headerVisible, setHeaderVisible] = React.useState(false);
  const [sectionsVisible, setSectionsVisible] = React.useState([
    false,
    false,
    false,
  ]);

  React.useEffect(() => {
    const timer1 = setTimeout(() => setHeaderVisible(true), 200);
    const timer2 = setTimeout(
      () => setSectionsVisible([true, false, false]),
      600
    );
    const timer3 = setTimeout(
      () => setSectionsVisible([true, true, false]),
      1200
    );
    const timer4 = setTimeout(
      () => setSectionsVisible([true, true, true]),
      1800
    );

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E5E5E5]  transition-opacity duration-800 opacity-100 overflow-hidden">
      <Header />
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="inline-block border-4 border-black px-8 py-2 mt-32  transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default">
            <h1
              className="text-lg font-bold tracking-wider transition-all duration-1000 mb-0 p-2"
              style={{
                letterSpacing: headerVisible ? "0.2em" : "0.1em",
              }}
            >
              SKILLS
            </h1>
          </div>
        </div>

        {/* Using Now Section */}
        <div
          className={`mb-12 transition-all duration-600 ${
            sectionsVisible[0]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <SectionTitle delay={800}>USING NOW:</SectionTitle>
          <div className="grid grid-cols-4 gap-4">
            {skillsData.usingNow.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
