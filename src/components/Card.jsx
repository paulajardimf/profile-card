import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiFillBehanceSquare,
} from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import "../styles/components/Card.sass";

export default function Card() {
  return (
    <>
      <section className="container-card">
        <section className="section-color"></section>
        <section className="section-white">
          <img
            src="https://github.com/paulajardimf.png"
            alt="Paula Jardim"
          />
          <h1>Paula Jardim</h1>
          <h2>Desenvolvedora Full Stack</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            laudantium assumenda adipisci minus quibusdam cupiditate deserunt
            modi aspernatur cumque laboriosam reprehenderit atque itaque eos,
            obcaecati est quia ullam labore enim.
          </p>
          <section className="container-links">
            <a
              href="https://www.linkedin.com/in/paulajardimf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/paulajardimf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://paulajardim.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbWorldWww />
            </a>
            <a
              href="https://www.behance.net/paulajar_dim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillBehanceSquare />
            </a>
            <a
              href="mailto:paulajardimf@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail />
            </a>
          </section>
        </section>
      </section>
    </>
  );
}
