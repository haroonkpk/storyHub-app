import React from "react";

export default function Footer() {
  return (
    <footer className="footer items-center my-20 md:mb-0 px-5 justify-center border-t-4 border-base-100 py-6">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-lg">Haroon</h2>
        <ul className="flex justify-center gap-4 mt-2">
          <li>
            <a
              href="https://haroonkpk-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://github.com/haroonkpk"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/muhammad-haroon-237084377"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:haroonkhanlala47@gmail.com"
              className="link link-hover"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
