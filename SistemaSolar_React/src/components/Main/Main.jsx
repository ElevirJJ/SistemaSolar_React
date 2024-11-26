import React, { useState } from "react";
import Content from "../Content/Content";
import Arrow from "../Arrows/Arrow";


import "./Main.scss";

const Main = () => {
    const quadros = [
        { id: 1, title: "Sol", texto: "É uma estrela anã amarela, composta principalmente de hidrogênio (cerca de 74%) e hélio (cerca de 24%), com traços de outros elementos. A fusão nuclear em seu núcleo transforma hidrogênio em hélio, liberando energia que irradia como luz e calor.", url: "/assets/sol.jpg" },
        { id: 2, title: "Mercúrio", texto: " O menor e mais próximo do Sol, com uma superfície cheia de crateras. Não tem atmosfera significativa, resultando em temperaturas extremas entre dia e noite.", url: "/assets/mercurio1.jpg" },
        { id: 3, title: "Vênus", texto: " Um planeta semelhante à Terra em tamanho e composição, mas envolto em uma atmosfera densa de dióxido de carbono, causando um intenso efeito estufa. Sua superfície é extremamente quente.", url: "/assets/vênus2.jpg" },
        { id: 4, title: "Terra", texto: " O único planeta conhecido por abrigar vida. Possui água em estado líquido, uma atmosfera rica em oxigênio e um campo magnético protetor.", url: "/assets/terra3.jpg" },
        { id: 5, title: "Marte", texto: "Conhecido como o Planeta Vermelho devido ao óxido de ferro na sua superfície. Possui calotas polares de gelo e sinais de água no passado.", url: "/assets/marte4.jpg" },
        { id: 6, title: "Júpiter", texto: "O maior planeta do Sistema Solar, composto principalmente de hidrogênio e hélio. Apresenta uma Grande Mancha Vermelha, uma tempestade gigante que dura séculos.", url: "/assets/jupiter5.jpg" },
        { id: 7, title: "Saturno", texto: "Famoso por seus anéis de partículas de gelo e poeira. Assim como Júpiter, é composto principalmente de hidrogênio e hélio.", url: "/assets/saturno6.jpg" },
        { id: 8, title: "Urano", texto: "Um gigante de gelo com um tom azul esverdeado devido ao metano em sua atmosfera. Gira quase de lado, com seu eixo inclinado cerca de 98 graus.", url: "/assets/urano7.jpg" },
        { id: 9, title: "Netuno", texto: "Um planeta azul profundo com ventos mais rápidos do que em qualquer outro lugar no Sistema Solar. Também possui manchas escuras que são grandes tempestades.", url: "/assets/netuno8.jpg" },
    ];


    const [planetas, setPlanetas] = useState(quadros);


    const prev = () => {
        const update = [...planetas]
        update.unshift(update.pop())
        setPlanetas(update)
    }

    const next = () => {
        const update = [...planetas]
        update.push(update.shift())
        setPlanetas(update)
    }


    return (
        <section className="container">
           <div className="planetas">
            {planetas.map((quadro)=>(
                <div key={quadro.id} className="item" style={{backgroundImage: `url(${quadro.url})`}} >
                
                   <Content titulo={quadro.title} conteudo={quadro.texto} />
                   
                </div>
            )) }
           </div>

           <Arrow volta={prev} avanca= {next} />
        </section>
    );
};

export default Main;
