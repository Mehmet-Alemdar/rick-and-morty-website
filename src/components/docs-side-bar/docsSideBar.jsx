import React from 'react';

const docsSideBar = ({ content }) => {
  const handleLinkClick = (link) => {
    window.location.href = `#${link}`;
  };

  return (
    <ul className="sticky pb-6 min-w-[235px] border-r-[1px] h-[calc(-60px+100vh)] pt-[30px] overflow-y-auto">
      {content && Array.isArray(content) && content.length > 0 && content.map((item, index) => (
        <li key={index} className="space-y-2 pb-4">
          <a className="font-bold text-[22px] text-primary-black cursor-pointer hover:text-primary-orange transition-all duration-150">{item.title}</a>
          <ul className="space-y-2">
            {item.items && Array.isArray(item.items) && item.items.length > 0 && item.items.map((subItem, subIndex) => (
              <li key={subIndex}>
                <a
                  className="font-light text-[17px] cursor-pointer hover:text-primary-orange transition-all duration-150"
                  onClick={() => handleLinkClick(subItem.link)} // Handle click event
                >
                  {subItem.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default docsSideBar;