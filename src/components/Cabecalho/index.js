import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="/">
                <div>
                    <img src={logo} alt="Logo do Danceflix"/>
                    <h1>DanceFlix</h1>
                </div>
            </Link>
            <nav className={styles.navegacao}>
                <div>
                    <CabecalhoLink url="/">
                        HOME
                    </CabecalhoLink>
                </div>
                <div>
                    <CabecalhoLink url="/novo-video">
                        NOVO VÍDEO
                    </CabecalhoLink>
                </div>
            </nav>
        </header>
    )
}

export default Cabecalho;
