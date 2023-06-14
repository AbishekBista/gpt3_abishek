import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>
Enriching conversations and fostering engagement, ChatGPT weaves intricate webs of knowledge and understanding. Its virtual presence brings forth a realm where ideas flourish, bridging the gap between curiosity and answers. With every word carefully crafted, it dances between information and creativity, granting users a tapestry of possibilities. Through its vast repertoire, ChatGPT invites minds to explore, learn, and grow, ensuring an immersive and captivating experience for all who seek its wisdom.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility