import styles from './Footer.module.css'

function Footer () {
    return (
      <footer className={`${styles.footer}text-center text-white py-2 mt-4`}>
        <p className='m-0'>Todos os direitos reservados a Nutri-Food.</p>
      </footer>
    )
  }

  export default Footer