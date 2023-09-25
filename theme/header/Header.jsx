import MessageBar from "./MessageBar/MessageBar";
import Container from "react-bootstrap/Container";
import styles from './src/css/header.module.scss';
import logo from './src/img/logo@2x.png';
import Img from '../components/Image'


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header() {
    return (
        <>
            <header className="header-fixed">
                <MessageBar/>
                <div className="header-limiter">
                    <Container>
                        <Img info={logo} alt={"logo"} url={'/'}/>
                        <nav>
                            <a href="#">Home</a>
                            <a href="#" className="selected">Blog</a>
                            <a href="#">Pricing</a>
                            <a href="#">About</a>
                            <a href="#">Faq</a>
                            <a href="#">Contact</a>
                        </nav>
                    </Container>
                </div>
            </header>

        </>
    )
}