"use client"
import Header from "../../components/theme/header/Header";

export default function Home() {
    return (
        <>
            <Header />
            <div>
                <h1>Projeto de integração de API com React Next</h1>
                <p>Este projeto demonstra como integrar uma API com React Next.</p>
                <ul>
                    <li>
                        <a href="/get">Requisição GET</a>
                    </li>
                    <li>
                        <a href="/post">Requisição POST</a>
                    </li>
                </ul>
            </div>
        </>

    )
}
