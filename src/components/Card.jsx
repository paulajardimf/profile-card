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
          Desenvolvedora Full Stack, cursando pós graduação em Desenvolvimento Full Stack na Faculdade Descomplica.
          Tenho formação em Arquitetura e Urbanismo, e possuo experiência em desenvolvimento de treinamentos para equipes, gerenciamento de equipe e escritório, produção de artes gráficas, atendimento, administrativo e financeiro. Entre em contato comigo e confira meus projetos nos links abaixo:
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
