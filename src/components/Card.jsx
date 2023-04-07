import {AiFillLinkedin, AiFillGithub, AiOutlineMail, AiFillBehanceSquare} from 'react-icons/ai'
import '../styles/components/Card.sass'


export default function Card() {
  return (
    <>
      <section className='container-card'>
        <section className="section-color"></section>
        <section className="section-white">
          <img src="https://avatars.githubusercontent.com/u/67557314?v=4" alt="Paula Jardim" />
          <h1>Paula Jardim</h1>
          <h2>Desenvolvedora Full Stack</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laudantium assumenda adipisci minus quibusdam cupiditate deserunt modi aspernatur cumque laboriosam reprehenderit atque itaque eos, obcaecati est quia ullam labore enim.</p>
          <section className='container-links'>
          <AiFillLinkedin/>
          <AiFillGithub/>
          <AiOutlineMail/>
          <AiFillBehanceSquare/>
          </section>
        </section>
      </section>
    </>
  )
}