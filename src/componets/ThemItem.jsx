import React from 'react'

const ThemItem = ({ color, img, changeColor }) => {
    return <img src={img} alt="" className="theme__img" onClick={() => { changeColor(color) }} />;

}

export default ThemItem
