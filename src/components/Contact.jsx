import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <footer id="contact" className=" max-w-5xl mx-auto py-16 px-6 text-[#333366]">
      <h2 className="text-4xl font-semibold mb-6 border-b-4 inline-block">Contact</h2>
      <p className="mb-10">Feel free to reach out through any of the platforms below:</p>

      <div className="flex flex-wrap justify-center gap-8 text-center text-[#333366]">
        {/* Email */}
        <a href="mailto:alo.sanchezochoa@gmail.com" className="flex flex-col items-center hover:underline">
          <FontAwesomeIcon icon={faEnvelope} className="text-3xl mb-1 text-[#333366]" />
          <span></span>
        </a>
        {/* GitHub */}
        <a href="https://github.com/Whimss" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:underline">
          <FontAwesomeIcon icon={faGithub} className="text-3xl mb-1 text-[#333366]" />
          <span></span>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/alondra-sanchez-ochoa-115484368/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:underline">
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl mb-1 text-[#333366]" />
          <span></span>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/whimss" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:underline">
          <FontAwesomeIcon icon={faInstagram} className="text-3xl mb-1 text-[#333366]" />
          
        </a>

        {/* Facebook */}
        
      </div>
    </footer>
  );
}

