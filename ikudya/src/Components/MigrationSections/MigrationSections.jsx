import React, {useState} from 'react';
import S from './MigrationSections.module.css'
import {ArrowForward, ArrowRight, Button} from '../ButtonElement'

const MigrationSections = ({
                               lightBg, id, imgStart, topLine,
                               lightText, headLine, darkText, description,
                               img, alt, primary, buttonLabel, dark, dark2
                           }) => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <div className={S.InfoContainer} lightBg={lightBg} id={id}>
            <div className={S.InfoWrapper}>
                <div className={S.InfoRow} imgStart={imgStart}>
                    <div className={S.Column1}>
                        <div className={S.TextWrapper}>
                            <p className={S.TopLine}>{topLine}</p>
                            <h1 className={S.Heading} lightText={lightText}>{headLine}</h1>
                            <p className={S.Subtitle} darkText={darkText}>{description}</p>
                            <div className={S.BthWrap}>
                                <Button to='CallBack' onMouseEnter={onHover} onMouseLeave={onHover}
                                        primary="true" dark="true"
                                >
                                    Read More {hover ? <ArrowForward/> : <ArrowRight/>}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={S.Column2}>
                        <div className={S.ImgWrap}>
                            <img src={img} alt={alt}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default MigrationSections;