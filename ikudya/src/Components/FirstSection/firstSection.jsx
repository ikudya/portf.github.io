import React, {useState} from 'react';
import S from './FirstSection.module.css'
import Video from '../../videos/video.mp4'
import {Link as LinkS} from 'react-scroll';
import {ArrowForward, ArrowRight, BthWrapper, Button} from '../ButtonElement'


const FirstSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <div className={S.fsContainer}>
            <div className={S.fsBg}>
                <video autoPlay loop muted src={Video} type='video/mp4'/>
            </div>
            <div className={S.Content}>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem consequatur doloribus
                    eius, enim error expedita hic illo impedit ipsa ipsum maiores molestias nobis officiis quae quos
                    saepe sequi totam?</p>
                <BthWrapper>
                    <Button to='CallBack' onMouseEnter={onHover} onMouseLeave={onHover}
                            primary="true" dark="true"
                    >
                        CallBack me {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </BthWrapper>
            </div>
        </div>

    )
}
export default FirstSection;