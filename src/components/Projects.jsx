const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    link: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Todo App",
    description: "A simple todo app with CRUD functionality using React Hooks.",
    link: "https://github.com/yourusername/todo-app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-semibold mb-6 border-b-4 border-blue-600 inline-block">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map(({ title, description, link }, i) => (
          <div key={i} className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="mb-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}