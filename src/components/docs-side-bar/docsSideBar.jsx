import React from 'react';

const docsSideBar = ({ content }) => {
  return (
    <ul className="min-w-[235px] sticky border-r-[1px] space-y-4 pt-[28px]">
      {content && Array.isArray(content) && content.length > 0 && content.map((item, index) => (
        <li key={index} className="space-y-2 pb-4">
          <a className="font-bold text-[22px] text-primary-black cursor-pointer hover:text-primary-orange transition-all duration-150">{item.title}</a>
          <ul className="space-y-2">
            {item.items && Array.isArray(item.items) && item.items.length > 0 && item.items.map((subItem, subIndex) => (
              <li key={subIndex}>
                <a className="font-light text-[17px] cursor-pointer hover:text-primary-orange transition-all duration-150">{subItem.title}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default docsSideBar;