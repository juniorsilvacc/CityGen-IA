import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-10 mt-20" style={{ background: "#27272A", bottom: 0, left: 0, width: "100%" }}>
      <div className="container mx-auto px-4 items-center justify-between sm:px-8">
        <div className="flex justify-between">
          <div>
            <span className="text-white">
              © 2024 Your Company. All rights reserved.
            </span>
          </div>
          <div>
            <a href="https://github.com/juniorsilvacc" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
              <FaGithub className="mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
