import React from "react";
import S from "./SkillsSection.module.css";

const Skills = ({
                    lightBg, id, imgStart, topLine,
                    lightText, headLine, darkText, description,
                    img1, img2, img3, alt
                }) => {
    return (
        <div className={S.InfoContainer}>
            <div className={S.InfoWrapper}>
                <div className={S.TextWrapper}>
                    <h1 className={S.TopLine}>Additional passions</h1>
                </div>
                <div className={S.cards}>
                    <div className={S.card1}>
                        <div className={S.Img}>
                            <img src={img1} alt={alt}/>
                        </div>
                        <div className={S.Dev}>
                            <h1>Front-End Developer</h1>
                        </div>
                        <div className={S.tech}>
                            <p>Sass, React, Js</p>
                        </div>
                    </div>
                    <div className={S.card1}>
                        <div className={S.Img}>
                            <img src={img2} alt={alt}/>
                        </div>
                        <div className={S.Dev}>
                            <h1>Front-End Developer</h1>
                        </div>
                        <div className={S.tech}>
                            <p>Sass, React, Js</p>
                        </div>
                    </div>
                    <div className={S.card1}>
                        <div className={S.Img}>
                            <img src={img3} alt={alt}/>
                        </div>
                        <div className={S.Dev}>
                            <h1>Front-End Developer</h1>
                        </div>
                        <div className={S.tech}>
                            <p>Sass, React, Js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Skills;