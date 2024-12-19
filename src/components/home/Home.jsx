import React from "react";
import style from "./Home.module.css";

const Home = () => {

    return (
        <div className={style.body}>
            <div className={style.bodybg}>
                <h3>Perdidos y encontrados Buenos Aires</h3>
                <p>Este proyecto nace con el propósito de ayudar a que las mascotas extraviadas regresen a sus hogares. Tu colaboración es fundamental: esta página es el resultado del esfuerzo conjunto y la solidaridad de toda la comunidad</p>
            </div>
        </div>
    )
}

export default Home;