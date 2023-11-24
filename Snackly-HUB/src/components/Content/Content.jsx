import React from "react";
import ca from "../Cards/Card.module.css";
import Story from "../Story/Story.jsx";

const Content = () => {
    return (
        <main>
            {/*<Card />*/}
            <div className={ca.container}>


                <div className={ca.card}>

                    <div className={ca.cardImage}>
                        <img className={ca.cardImg} src='/card.png' alt=""/>
                    </div>

                    <div className={ca.cardTitle}>
                        Магическая Атмосфера
                    </div>

                    <div className={ca.cardDescription}>
                        В нашем заведении царит магическая атмосфера
                        наполненная вкусными ароматами
                    </div>

                </div>
                <div className={ca.card}>

                    <div className={ca.cardImage}>
                        <img className={ca.cardImg} src='/card.png' alt=""/>
                    </div>

                    <div className={ca.cardTitle}>
                        Лучшее качество Еды
                    </div>

                    <div className={ca.cardDescription}>
                        Качество нашей
                        Еды - отменное!
                    </div>

                </div>
                <div className={ca.card}>

                    <div className={ca.cardImage}>
                        <img className={ca.cardImg} src='/card.png' alt=""/>
                    </div>

                    <div className={ca.cardTitle}>
                        Недорогая Еда
                    </div>

                    <div className={ca.cardDescription}>
                        Стоимость нашей Еды
                        зависит только от ее
                        количества. Качество
                        всегда на высоте!
                    </div>

                </div>
            </div>
            <Story/>
        </main>
    )
}

export default Content