import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import atelierCaveDark from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";

const PageRendering = ({content}) => {

  return (
    <div className='w-full flex justify-center pt-[50px] border-l-[1px] pb-6'>
      <div className='max-w-[900px] px-1.5'>
        {
        content && Array.isArray(content) && content.length > 0 && content.map((item, index) => {
          if (item.type === 'heading') {
            return <h1 key={index} className='font-bold text-4xl text-primary-black'>{item.value}</h1>
          }
          if (item.type === 'subtitle') {
            return (
              <div key={index} >
                <p className='text-[28px] font-bold pt-20 pb-2 text-primary-black'>{item.value}</p>
                {
                  item.content && Array.isArray(item.content) && item.content.length > 0 && item.content.map((subItem, subIndex) => {
                    if (subItem.type === 'text') {
                      return (
                        <span key={subIndex} className='text-[18px] font-light'>{subItem.value}</span>
                      )
                    }
                    if (subItem.type === 'bold') {
                      return <span key={subIndex} className='text-[18px] font-bold'>{subItem.value}</span>
                    }
                    if (subItem.type === 'link') {
                      return (
                        <p key={subIndex} className='underline underline-offset-4 mb-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150'>
                          <a href={subItem.value} className='text-[18px] font-light'>{subItem.value}</a>
                        </p>
                      )
                    }
                    if (subItem.type === 'code') {
                      return (
                        <div key={subIndex} className='rounded-[6px] overflow-hidden mb-4'>
                          <SyntaxHighlighter language="javascript" style={themes['tomorrowNight']}>
                            {subItem.value}
                          </SyntaxHighlighter>
                        </div>
                      )
                    }
                    if (subItem.type === 'block') {
                      return (
                        <div key={subIndex} className='border-l-8 border-l-primary-orange bg-secondary-orange py-4 px-2'>
                          <p className='text-[18px] font-light italic text-slate-600'>{subItem.value}
                            {subItem.text_link && (
                              <a href={subItem.link} className='text-[18px] text-primary-black underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150'>{subItem.text_link}</a>
                            )}
                          </p>
                        </div>
                      )
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
              <div key={index} className='rounded-xl overflow-hidden pb-80'>
              <SyntaxHighlighter language="javascript" style={atelierCaveDark}>
                {item.value}
              </SyntaxHighlighter>
              </div>
            )
          }
        })
      }
      </div>
    </div>
  )
}

export default PageRendering