import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Creative Writing Assistant',
    text: 'Exploring how GPT-3 assists writers in generating innovative storylines, characters, and immersive narratives, revolutionizing the creative writing process.'
  },
  {
    title: 'Virtual Customer Support Agent',
    text: 'Examining the seamless integration of GPT-3 in customer service, providing personalized assistance, resolving queries, and enhancing customer satisfaction.'
  },
  {
    title: "Breaking Barriers: GPT-3's Language Translation Prowess",
    text: "Investigating GPT-3's exceptional language translation capabilities, enabling accurate and contextually nuanced translations across various languages, revolutionizing global communication."
  },
  {
    title: 'Medical Diagnosis Assistant',
    text: 'Transforming Healthcare: GPT-3 as a Medical Diagnosis Assistant',
    Subtitle: "Exploring GPT-3's potential in aiding medical professionals with accurate diagnoses, analyzing symptoms, suggesting treatments, and advancing patient care through intelligent assistance."
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {
          featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features