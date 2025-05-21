const experiences = [
  {
    role: "Frontend Developer",
    company: "Awesome Company",
    duration: "Jan 2022 - Present",
    details: [
      "Built scalable React applications.",
      "Collaborated with designers and backend engineers.",
      "Improved app performance by 30%."
    ]
  },
  {
    role: "Junior Developer",
    company: "Startup Inc.",
    duration: "Jun 2020 - Dec 2021",
    details: [
      "Maintained legacy codebase and wrote unit tests.",
      "Implemented responsive UI features.",
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-semibold mb-6 border-b-4 border-blue-600 inline-block">Experience</h2>
      {experiences.map(({ role, company, duration, details }, i) => (
        <div key={i} className="mb-10">
          <h3 className="text-2xl font-semibold">{role} <span className="text-blue-400">@ {company}</span></h3>
          <p className="italic text-gray-400 mb-2">{duration}</p>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            {details.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}