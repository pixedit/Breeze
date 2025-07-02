import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
	return (
		<footer>
			<main>
				<div className="about-developer">
					<p>
						This is personal project built for practice and learning purpose.
						<br />
						Hope You find it enjoyable and useful.
					</p>
					<div className="social-links">
						<h4>Connect with Me</h4>
						<ul>
							<li>
								<a
									href="https://github.com/pixedit"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub">
									<FaGithub className="github-icon" />
								</a>
							</li>
							{/* Other links will add in the future */}
							<li>
								<span title="LinkedIn coming soon">
									<FaLinkedin />
								</span>
							</li>
							<li>
								<span title="Instagram coming soon">
									<FaInstagram />
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="about-breeze">
					<div>
						<h3>
							About <span>Breeze</span>
						</h3>
						<ul>
							<li>
								<div>
									<p>Breeze is powered by </p>
									<a
										href="https://openweathermap.org/"
										target="_blank"
										rel="noopener noreferrer"
										className="api">
										OpenWeather API
									</a>
								</div>
							</li>
							<li>
								<p>Supports °F/°C toggle</p>
							</li>
							<li>
								<p>Responsive across all devices</p>
							</li>
							<li>
								<p>
									<span style={{ textDecoration: "underline" }}>Available</span>{" "}
									for collaboration and projects
								</p>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</footer>
	);
};

export default Footer;
