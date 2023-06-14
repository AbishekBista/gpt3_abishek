import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
        Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
        Enriching conversations and fostering engagement, ChatGPT weaves intricate webs of knowledge and understanding. Its virtual presence brings forth a realm where ideas flourish, bridging the gap between curiosity and answers. With every word carefully crafted, it dances between information and creativity, granting users a tapestry of possibilities. Through its vast repertoire, ChatGPT invites minds to explore, learn, and grow, ensuring an immersive and captivating experience for all who seek its wisdom.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header