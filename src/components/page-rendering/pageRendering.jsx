import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import atelierCaveDark from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";

const PageRendering = ({content}) => {

  return (
    <div className='flex flex-col'>
    {
      content && Array.isArray(content) && content.length > 0 && content.map((item, index) => {
        if (item.type === 'heading') {
          return <h1 key={index} className='font-bold text-4xl'>{item.value}</h1>
        }
        if (item.type === 'subtitle') {
          return <p key={index} className='text-[28px] font-bold pt-20'>{item.value}</p>
        }
        if(item.type === 'paragraph2') {
          return (
            <div key={index} className='py-2'>
              {
                item.items && Array.isArray(item.items) && item.items.length > 0 && item.items.map((subItem, subIndex) => {
                  if (subItem.type === 'text') {
                    return <span key={subIndex} className='text-[18px]'>{subItem.value}</span>
                  }
                  if (subItem.type === 'bold') {
                    return <span key={subIndex} className='text-[18px] font-bold'>{subItem.value}</span>
                  }
                })
              }
            </div>
          )
        }
        if (item.type === 'link') {
          return (
            <p key={index} className='underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150'>
              <a href={item.value} className='text-[18px]'>{item.value}</a>
            </p>
          )
        }
        if (item.type === 'code') {
          return (
            <div key={index} className='rounded-xl overflow-hidden'>
            <SyntaxHighlighter language="javascript" style={atelierCaveDark}>
              {item.value}
            </SyntaxHighlighter>
            </div>
          )
        }
      })
    }
    </div>
  )
}

export default PageRendering