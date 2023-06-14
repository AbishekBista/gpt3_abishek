import React from 'react'
import './blog.css'
import {Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports.js'
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article  imgUrl={blog02} date="Sep 26, 2021" title="OpenAI Unveils GPT-3: The Revolutionary Language Model Redefining AI Communication"/>
          <Article  imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 Breaks Boundaries: Achieving Unprecedented Language Understanding and Generation"/>
          <Article  imgUrl={blog04} date="Sep 26, 2021" title="ChatGPT by OpenAI: A Game-Changer in Conversational AI, Setting New Benchmarks"/>
          <Article  imgUrl={blog05} date="Sep 26, 2021" title="GPT-3's Impact on Industries: From Customer Service to Healthcare, OpenAI's Innovation Shines"/>
        </div>
      </div>
    </div>
  )
}

export default Blog