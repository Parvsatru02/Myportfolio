import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";

const skills = {
  Programming: ["Python", "C++", "C", "Java", "SQL"],
  Tools: [
    "Excel",
    "Tableau",
    "Pandas",
    "Matplotlib",
    "Flask",
    "React.js",
    "Tailwind CSS",
    "Git",
    "Nginx",
  ],
  SoftSkills: ["Communication", "Problem Solving", "Time Management", "Creative Thinking"],
};

const projects = [
  {
    title: "Heart Disease Detection",
    description:
      "Developed a machine learning pipeline using Python and Scikit-learn to predict heart disease with 88% accuracy. This project involved multiple patient data, detailed EDA, and model optimization techniques.",
  },
  {
    title: "Engage Court Booking App",
    description:
      "Built a user-friendly court reservation platform using Flutterflow. Designed intuitive booking flows, connected it to a backend database, and created an admin dashboard for real-time management.",
  },
  {
    title: "Data Analytics Dashboards",
    description:
      "Cleaned, transformed, and visualized complex datasets using Python, Excel, and Tableau. Created interactive dashboards that communicated trends, insights, and KPIs for decision-making.",
  },
];

const experiences = [
  {
    company: "Emirates Airline",
    title: "Automation Intern",
    duration: "Feb 2025 – Present",
    details: [
      "Developed automation tools and full-stack web apps using Flask, React.js, and Tailwind CSS",
      "Optimized SQL queries and managed data pipelines with MariaDB",
      "Streamlined DevOps with CI/CD pipelines and Git workflows",
      "Configured Nginx for performance optimization (load balancing, caching, failover)",
      "Contributed to a Smart Crisis Command Hub for real-time network event tracking",
      "Worked on Generative AI features to support operational tools and automation",
    ],
  },
  {
    company: "Cognicx IT Solutions",
    title: "Machine Learning Intern",
    duration: "Aug 2024 – Sept 2024",
    details: [
      "Built ML classification models using Python and TensorFlow",
      "Cleaned and preprocessed datasets using Pandas for better model performance",
      "Created a sentiment analysis model to classify customer feedback as positive or negative",
      "Designed a basic UI for real-time feedback input and prediction display",
      "Gained exposure to model deployment and evaluation in production scenarios",
    ],
  },
];

const certifications = Array.from({ length: 9 }, (_, i) => {
  const num = i + 1;
  const ext = num === 9 ? "png" : "jpg"; // assuming only Cert9 is png
  return `/certificates/Cert${num}.${ext}`;
});

export default function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
          darkMode
            ? "bg-black text-emerald-400 shadow-md"
            : "bg-white text-indigo-600 shadow-md"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Parvathi Satrugnaraj</h1>
          <ul className="hidden md:flex gap-8 text-sm font-semibold">
            <li>
              <a href="#about" className="hover:text-indigo-700 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-700 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-indigo-700 transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-700 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:text-indigo-700 transition">
                Certifications
              </a>
            </li>            
            <li>
              <a href="#contact" className="hover:text-indigo-700 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 text-xl hover:text-indigo-700 transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className={`h-screen flex flex-col justify-center items-center text-center px-4 pt-20 transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-black via-gray-900 to-gray-800"
            : "bg-gradient-to-br from-indigo-300 via-white to-indigo-300"
        }`}
      >
        {/* Profile Image */}
        <img
          src="/PP.jpg"
          alt="Parvathi Satrugnaraj"
          className="w-64 h-64 rounded-full mb-4 shadow-lg object-cover"
        />

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-sm tracking-widest mb-2 font-semibold transition-colors duration-500 ${
            darkMode ? "text-emerald-300" : "text-indigo-700"
          }`}
        >
          Computer Engineer & Developer
        </motion.h2>
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Hi, I'm Parvathi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={`mt-6 max-w-xl text-lg leading-relaxed transition-colors duration-500 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I design and develop intelligent web applications and data-driven tools
          that solve real-world problems with style.
        </motion.p>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold border-b-4 border-indigo-600 inline-block mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`text-lg leading-relaxed transition-colors duration-500 ${
            darkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          I’m a Computer Engineering graduate who loves turning ideas
          into working code. Whether it's building intuitive UIs with React or
          developing smart automation pipelines using Python and Flask, I enjoy
          crafting solutions that are elegant, efficient, and impactful. I’m
          especially passionate about data, dashboards, and solving complex
          problems with creative logic.
        </motion.p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className={`${
          darkMode ? "bg-gray-800" : "bg-indigo-50"
        } py-20 px-6 transition-colors duration-500`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-4 border-indigo-600 inline-block">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {Object.entries(skills).map(([category, list]) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } p-6 rounded-xl shadow-md shadow-indigo-100`}
              >
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {list.map((item) => (
                    <li
                      key={item}
                      className={`${
                        darkMode ? "bg-gray-600" : "bg-gray-100"
                      } py-2 rounded-lg font-medium`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Experience Timeline */}
<section id="experience" className="max-w-5xl mx-auto px-6 py-20">
  <h2 className="text-3xl font-bold mb-10 border-b-4 border-indigo-600 inline-block">
    Experience
  </h2>
  <div className="relative border-l-4 border-indigo-600 ml-4">
    {experiences.map((exp, idx) => (
      <motion.div
        key={exp.company}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: idx * 0.2 }}
        className="mb-12 ml-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-indigo-300 transition"
        style={{ backgroundColor: darkMode ? "#374151" : "#fff" }}
      >
        <div className="absolute -left-9 top-6 bg-indigo-600 rounded-full w-6 h-6 border-4 border-white"></div>

        {/* ✅ Red color for both Emirates & Cognicx */}
        <h3
          className={`text-xl font-semibold ${
            exp.company === "Emirates Airline" || exp.company === "Cognicx IT Solutions"
              ? "text-red-500"
              : "text-indigo-600"
          }`}
        >
          {exp.title} — {exp.company}
        </h3>

        <p
          className={`text-sm font-medium mb-2 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {exp.duration}
        </p>

        <ul
          className={`list-disc list-inside space-y-1 ${
            darkMode ? "text-gray-300" : "text-gray-900"
          }`}
        >
          {exp.details.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</section>


      {/* Projects */}
      <section
        id="projects"
        className={`${
          darkMode ? "bg-gray-800" : "bg-indigo-50"
        } py-20 px-6 transition-colors duration-500`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-4 border-indigo-600 inline-block">
            Projects
          </h2>
          <div className="space-y-10">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } p-6 rounded-xl shadow-md shadow-indigo-100 hover:shadow-indigo-400 transition`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                  {proj.title}
                </h3>
                <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                  {proj.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section
        id="certifications"
        className={`py-20 px-6 transition-colors duration-500 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-4 border-indigo-600 inline-block">
            Certifications
          </h2>
          <div
            className="whitespace-nowrap flex gap-6 pb-4 scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{ overflowX: "auto", overflowY: "hidden" }}
          >
            {certifications.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Certificate ${index + 1}`}
                onClick={() => setSelectedCert(src)}
                className="w-80 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer snap-start"
              />
            ))}
          </div>
        </div>
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={() => setSelectedCert(null)}
          >
            <img
              src={selectedCert}
              alt="Enlarged Certificate"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 border-b-4 border-indigo-600 inline-block"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`text-lg mb-4 transition-colors duration-500 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Let’s get in touch! I'm always open to exciting opportunities and
          collaboration.
        </motion.p>
        <motion.div
          className="flex justify-center gap-12 text-3xl text-indigo-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="mailto:parvsatru02@gmail.com"
            className="hover:text-indigo-700 transition"
            aria-label="Send Email"
          >
            📧
          </a>
          <a
            href="https://www.linkedin.com/in/parvathi-satrugnaraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-700 transition"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Parvsatru02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-700 transition"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className={`text-center text-sm py-6 transition-colors duration-500 ${
          darkMode ? "text-gray-500 bg-black" : "text-gray-600 bg-white"
        }`}
      >
        &copy; {new Date().getFullYear()} Parvathi Satrugnaraj. All rights reserved.
      </footer>
    </div>
  );
}
