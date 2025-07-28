const About = () => {
  const whatsappNumber = "9390593737"; // Your number
  const defaultMessage = "Hello, I need help with ProjectWork"; // Auto-filled message

  return (
    <div className="about-page">
      <h2>About ProjectWork</h2>
      <p>
        <strong>ProjectWork</strong> is a platform designed for students and aspiring
        developers to <b>collaborate on real-world projects</b>. Whether you’re learning{" "}
        <b>Java</b>, <b>Python</b>, <b>C++</b>, or exploring <b>Web Development</b>, 
        ProjectWork connects you with projects, mentors, and peers to help you grow.
      </p>

      <h3>What We Offer</h3>
      <ul>
        <li>Projects across multiple domains (Java, Python, Web, etc.)</li>
        <li>Small <b>WhatsApp team groups</b> for easy collaboration</li>
        <li>Clear <b>submission deadlines</b> and guidelines</li>
        <li>Opportunities to <b>build your portfolio</b></li>
      </ul>

      <h3>Contact Us</h3>
      <p>If you have any questions or need help, reach out to us:</p>
      <ul>
        <li>
          <b>Email:</b>{" "}
          <a href="mailto:gayamchandana@gmail.com">gayamchandana@gmail.com</a>
        </li>
        <li><b>Phone:</b> +91 9390593737</li>
        <li>
          <b>WhatsApp Support:</b>{" "}
          <a
            href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            Chat on WhatsApp
          </a>
        </li>
      </ul>

      <h3>Follow Us</h3>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/gayam-chandana-033a0b319"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:gayamchandana@gmail.com">Email Us</a>
        </li>
      </ul>
    </div>
  );
};

export default About;
