import React from 'react';
import './pagesCSS/home.css'; // Importando o arquivo CSS para estilização


const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1 className="title">Olá, sou Samuel Rodrigues!</h1>
                <p className="subtitle">Desenvolvedor Full Stack | Criando soluções inovadoras para a web</p>
            </header>

            <section className="about">
                <h2>Sobre Mim</h2>
                <p>
                    Sou um desenvolvedor full stack com experiência em construir aplicações web e
                    soluções escaláveis. Trabalho com tecnologias modernas como React, Node.js, Express,
                    MongoDB, e muito mais. Meu foco é sempre criar interfaces de usuário intuitivas e
                    sistemas robustos que atendem às necessidades de negócios.
                </p>
            </section>

            <section className="skills">
                <h2>Minhas Habilidades</h2>
                <ul>
                    <li>Frontend: React, HTML, CSS, JavaScript, TypeScript</li>
                    <li>Backend: Node.js, Express, REST APIs</li>
                    <li>Bancos de Dados: MongoDB, PostgreSQL</li>
                    <li>Versionamento: Git, GitHub, GitLab</li>
                    <li>Ferramentas: Docker, Jest, Webpack</li>
                </ul>
            </section>

            <section className="projects">
                <h2>Projetos Destacados</h2>
                <div className="project-list">
                    <div className="project">
                        <h3>Projeto 1: TasksSystem</h3>
                        <p>Um sistema para gerenciamento de tarefas</p>
                        <a href="https://github.com/Samurrocha/SISTarefa.git" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                    </div>

                    <div className="project">
                        <h3>Projeto 2: Java API</h3>
                        <p>API em java para uma loja</p>
                        <a href="https://github.com/Samurrocha/JavaAPI.git" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                    </div>

                    <div className="project">
                        <h3>Projeto 3: Blog Pessoal</h3>
                        <p>Blog pessoal com autenticação e painel de administração, utilizando Node.js e React.</p>
                        <a href="https://github.com/seu-usuario/blog-pessoal" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>Conecte-se comigo:</p>
                <ul className="social-links">
                    <li><a href="https://github.com/Samurrocha" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/samuel-rodrigues-lima" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="samuel.rrocha12@gmail.com">Email</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Home;
