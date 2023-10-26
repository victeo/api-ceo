"use client"
import MessageBar from "./MessageBar/MessageBar";
import Container from "react-bootstrap/Container";
import styles from './src/css/header.module.scss';
import './src/css/style.scss';
import logo from './src/img/logo@2x.png';
import Img from '../components/Image';
import Carousel from '../components/CarouselCustom';


export default function HeaderCustom() {
    return (
        <>
            <header className="header-fixed">
                <MessageBar />
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Container>
                        <Img info={logo} alt={"logo"} url={'/'} classElement={'navbar-brand'} classNameImg={'navbar_brand_img'} />

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="/categoria">Categoria</a>
                                <a className="nav-item nav-link" href="/produto">Produtos</a>
                                <a className="nav-item nav-link" href="#">Usuários</a>
                            </div>
                        </div>
                    </Container>
                </nav>
            </header>
            <Carousel />

        </>
    )
}