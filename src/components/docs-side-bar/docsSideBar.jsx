import React from 'react';

const docsSideBar = ({ content, isSideBarOpen }) => {
  const handleLinkClick = (link) => {
    window.location.href = `#${link}`;
  };

  return (
    <ul className={`pb-6 pt-[85px] overflow-y-auto bg-white ${isSideBarOpen ? "fixed top-0 left-0 w-full h-full z-40 pl-6" : "hidden"} md:sticky md:min-w-[235px] md:w-[235px] md:h-[calc(-60px+100vh)] md:top-0 md:block pl-0`}>
    {content && Array.isArray(content) && content.length > 0 && content.map((item, index) => (
      <li key={index} className="space-y-2 pb-4">
        <a  onClick={() => handleLinkClick(item.link)} className="font-bold text-[22px] text-primary-black cursor-pointer hover:text-primary-orange transition-all duration-150">{item.title}</a>
        <ul className="space-y-2">
          {item.items && Array.isArray(item.items) && item.items.length > 0 && item.items.map((subItem, subIndex) => (
            <li key={subIndex}>
              <a
                className="font-light text-[17px] cursor-pointer hover:text-primary-orange transition-all duration-150"
                onClick={() => handleLinkClick(subItem.link)}
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