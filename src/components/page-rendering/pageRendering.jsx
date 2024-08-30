import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import atelierCaveDark from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AiOutlinePlus } from "react-icons/ai";

const PageRendering = ({content, sideBarToggle, isSideBarOpen}) => {

  return (
    <div className='w-full flex flex-col items-center justify-center pt-[100px] md:border-l-[1px] pb-6 sm:px-0 px-4'>
      <div className='max-w-[900px] px-1.5 w-full'>
        {
        content && Array.isArray(content) && content.length > 0 && content.map((item, index) => {
          if (item.type === 'heading') {
            return <h1 id={item.link} key={index} className='font-bold sm:text-4xl text-3xl text-primary-black break-words'>{item.value}</h1>
          }
          if (item.type === 'subtitle') {
            return (
              <div key={index}>
                <p id={item.link} className='sm:text-[28px] text-[24px] font-bold pt-20 pb-2 text-primary-black break-words'>{item.value}</p>
                {
                  item.content && Array.isArray(item.content) && item.content.length > 0 && item.content.map((subItem, subIndex) => {
                    if (subItem.type === 'text') {
                      return (
                        <span key={subIndex} className='sm:text-[18px] text-[15px] font-light break-words'>{subItem.value}</span>
                      )
                    }
                    if (subItem.type === 'bold') {
                      return <span key={subIndex} className='sm:text-[18px] text-[15px] font-bold break-words'>{subItem.value}</span>
                    }
                    if (subItem.type === 'link') {
                      return (
                        <p key={subIndex} className='underline underline-offset-4 mb-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150 break-words'>
                          <a href={subItem.value} className='sm:text-[18px] text-[15px] font-light break-words'>{subItem.value}</a>
                        </p>
                      )
                    }
                    if (subItem.type === 'code') {
                      return (
                        <div key={subIndex} className='rounded-[4px] md:rounded-[6px] overflow-hidden mb-2 md:mb-4'>
                        <SyntaxHighlighter language="javascript" style={themes['tomorrowNight']}>
                          {subItem.value}
                        </SyntaxHighlighter>
                      </div>
                      )
                    }
                    if (subItem.type === 'block') {
                      return (
                        <div key={subIndex} className='border-l-8 border-l-primary-orange bg-secondary-orange py-4 px-2 break-words'>
                          <p className='sm:text-[18px] text-[15px] font-light italic text-slate-600 break-words'>{subItem.value}
                            {subItem.text_link && (
                              <a href={subItem.link} className='sm:text-[18px] text-[15px] text-primary-black underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150 break-words'>{subItem.text_link}</a>
                            )}
                          </p>
                        </div>
                      )
                    }
                    if(subItem.type === 'text_code') {
                      return <span key={subIndex} className='sm:text-[16px] text-[13px] p-1 px-2 rounded-md font-light break-words text-blue-700 bg-gray-200'>{subItem.value}</span>
                    }
                  })
                }
              </div>
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
      <div className='bg-gradient-to-t h-36 w-full flex justify-center items-end mt-[-100px] from-white via-white to-transparent'>
        <p>Get premium for more content</p>
      </div>
      <button onClick={sideBarToggle} className={`md:hidden fixed bottom-5 z-[55] right-5 bg-primary-orange shadow-xl p-4 rounded-full inset-border transition-all duration-150 text-2xl ${isSideBarOpen ? "rotate-45" : "rotate-0"}`}>
        <AiOutlinePlus />
      </button>
    </div>
  )
}

export default PageRendering