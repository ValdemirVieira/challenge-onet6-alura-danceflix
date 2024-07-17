import styles from './Rodape.module.css';
import logoDanceFlix from './logo.png';
import logoGitHub from './logo-github.png';
import logoLinkedin from './logo-linkedin.png'

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img className={styles.logoDanceFlix} src={logoDanceFlix} alt='Logo do site'/>
            <h2>Desenvolvido por Valdemir Vieira</h2>
            <div className={styles.logos}>
                <a href='https://github.com/ValdemirVieira' target='_blank'>
                    <img src={logoGitHub} alt='Ícone Github'/>
                </a>
                <a href='https://www.linkedin.com/in/valdemir-vieira/' target='_blank'>
                    <img src={logoLinkedin} alt='Ícone LinkedIn'/>
                </a>
            </div>
        </footer>
    )
}

export default Rodape;