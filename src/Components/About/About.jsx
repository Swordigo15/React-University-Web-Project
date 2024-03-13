import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis facere? Corporis cupiditate molestiae dolore culpa modi, excepturi commodi eveniet cumque error fugiat saepe. Nihil voluptates iusto eum itaque maiores?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, fuga delectus laborum vitae, suscipit eaque, molestias libero magnam earum natus aliquam numquam aperiam laudantium! Magnam at quia aliquid illum quaerat?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ullam in nisi, explicabo cupiditate optio recusandae quis odio accusantium reprehenderit? Quod commodi sed consequuntur aperiam dolores cumque eius non autem?</p>
      </div>
    </div>
  )
}

export default About
