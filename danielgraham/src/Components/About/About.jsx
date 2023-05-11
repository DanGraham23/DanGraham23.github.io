import './style.css';
import {FaReact, FaAngular, FaJava, FaNodeJs} from 'react-icons/fa';
import {SiTypescript, SiMongodb, SiPostgresql, SiJavascript} from 'react-icons/si';

import DanGraham from '../../assets/images/dangraham.jpg';

export default function About(){
    return (
        <div id="about" className='about-container'>
            <div className='bio-container'>
                <img src={DanGraham} alt="daniel-graham" className='about-img' />
                <p className='bio'>I’m a passionate, enthusiastic, and hard-working full stack developer. I'm currently in my last semester pursuing my B.S. in Computer Science at Siena College in Loudonville, NY. I am familiar with a wide variety of tools and technologies, along with Agile methodology. In addition to this, I love working towards a more inclusive web, focusing on accessibility standards such as WCAG and ADA. Feel free to contact me over email or LinkedIn!
                 </p>
            </div>
            <div className='skills'>
                <FaReact color='#61DBFB' className='skill' aria-label="react"/>
                <FaAngular color='#dd1b16' className='skill' aria-label="angular"/>
                <SiTypescript color='#007acc' className='skill' aria-label="typescript"/>
                <SiJavascript color='#FFD43B' className='skill' aria-label="javascript"/>
                <FaJava color='#f89820' className='skill' aria-label="java"/>
                <FaNodeJs color='#68A063' className='skill' aria-label="node js"/>
                <SiMongodb color='#3FA037' className='skill' aria-label="mongo db"/>
                <SiPostgresql color='#c6e7fd' className='skill' aria-label="postgresql"/>
            </div>
        </div>
    )
}