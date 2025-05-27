export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto py-16 px-6 text-[#333366]">
      <h2 className="text-4xl font-semibold mb-6 border-b-4  inline-block">Contact</h2>
      <p className="mb-4">
        Feel free to reach out! You can find me on:
      </p>
      <ul className="space-y-2">
        <li>
          <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">
            Email: your.email@example.com
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}