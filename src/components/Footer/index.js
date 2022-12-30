import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Styles
const Wrapper = styled.div`
  background-color: #393e46;
  padding: 2em;
  margin-top: 8em;
  text-align: center;

  .links-container {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 0.5em;

    a {
      margin: 0 0.25em;
    }

    a:hover {
      color: #ffd369;
    }
  }

  p {
    margin: 0.25em 0;
  }

  .last-updated {
    font-size: 0.75rem;
    opacity: 0.7;
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <div className="links-container">
        <a href="https://github.com/rjckun" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/rjcootauco/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:rjcootauco@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p>Built and designed by Ruel John Cootauco</p>
      <p className="last-updated">Last Updated: 12/30/2022</p>
    </Wrapper>
  );
};

export default Footer;
