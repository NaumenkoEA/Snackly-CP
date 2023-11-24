import s from './Story.module.css'

const Story = () => {
    return (
        <div className={s.container}>
            <div className={s.storyHolder}>


                <div className={s.info}>
                    <div className={s.title}>
                        Наша История
                    </div>
                    <div className={s.text}>
                        Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана пришла
                        основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях
                        километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось на время
                        обустраивать себе нехитрый быт, добывать и готовить себе еду.
                    </div>

                    <div className={s.storyNumbers}>
                        <div className={s.numbers}>
                            93 <span>Напитки</span>
                        </div>
                        <div className={s.numbers}>
                            206 <span>Еда</span>
                        </div>
                        <div className={s.numbers}>
                            71 <span>Закуски</span>
                        </div>

                    </div>
                </div>

                <div className={s.image}>
                    <img className={s.img2} src="/img2.jpg" alt=""/>
                    <img className={s.img3} src="/img3.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Story