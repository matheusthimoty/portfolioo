import { FaReact, FaJs, FaCss3, FaNodeJs } from "react-icons/fa";

const skills = [
  { icon: FaReact, name: "React" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaCss3, name: "CSS" },
  { icon: FaNodeJs, name: "Node.js" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Habilidades
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2">
              <skill.icon className="text-purple-400" size={32} />
              <span className="text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;