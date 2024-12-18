import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    return (
        <>
            {skills.map(({ title, percentage }, index) => {
                return (
                    <div className="process__box" key={index}>
                        <div className="process__circle">
                            <CircularProgressbar strokeWidth={6} text={`${percentage}`} value={percentage}/>
                        </div>

                        <h3 className="skills__title">{title}</h3>
                    </div>
                )
            })}
        </>
    )
}

export default Skills
