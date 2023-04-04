import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-center font-semibold ">
			<Header />
			<main>
				<header className="font-extrabold text-xl ">
					Welcome to my portfolio site! testing
				</header>
			</main>
			<nav>
				<ul>
					<li>
						<a href="/projects.html">Projects</a>
					</li>
					<li>
						<a href="/skills.html">Skills</a>
					</li>
					<li>
						<a href="/experience.html">Experience</a>
					</li>
					<li>
						<a href="/education.html">Education</a>
					</li>
					<li>
						<a href="/contact.html">Contact</a>
					</li>
				</ul>
			</nav>
			<Footer />
		</div>
	);
}

export default App;
