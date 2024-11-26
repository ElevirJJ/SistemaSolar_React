import './Content.scss'

const Content = ({ titulo, conteudo }) => {
  return (
    <div className='description'>
      <h3>{titulo}</h3>
      <p>{conteudo}</p>
      <div className="btn">
        <button className='btn1'>Saiba mais</button>
        <button className='btn2'>Visite web</button>
      </div>
    </div>
  )
}

export default Content

