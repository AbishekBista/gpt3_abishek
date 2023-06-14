import React from 'react'
import './whatGPT.css'
import { Feature } from '../../components'
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature 
          title="What is GPT-3"
          text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art language model developed by OpenAI. With 175 billion parameters, it possesses remarkable natural language processing capabilities. GPT-3 can generate human-like text, answer questions, translate languages, write code, and perform various other language-related tasks, revolutionizing the field of AI-driven communication."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
        The possibilities are beyond your imagination
        </h1>
        <p>
        Explore The Library
        </p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature 
        title="Chatbots"
        text="Conversational, interactive, knowledge-based, context-aware, language understanding, problem-solving, customer support, personalization, natural language processing, and continuous learning."/>
        <Feature
        title="Knowledgebase"
        text="GPT-3 has a vast knowledge base encompassing a wide range of topics, including general knowledge, specific domains, historical events, scientific concepts, cultural references, and more." />
        <Feature
        title="Education"
        text="GPT-3's education involves pre-training on a large corpus of text from the internet, followed by fine-tuning on specific tasks to enhance its understanding, language generation, and contextual comprehension abilities." />
      </div>
    </div>
  )
}

export default WhatGPT3