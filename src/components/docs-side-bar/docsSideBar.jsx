import React from 'react';

const docsSideBar = ({ content, isSideBarOpen }) => {
  const handleLinkClick = (link) => {
    window.location.href = `#${link}`;
  };

  return (
    <ul className={`pb-6 lg:mt-[81px] lg:pt-0 pt-[81px] overflow-y-auto bg-white ${isSideBarOpen ? "fixed top-0 left-0 w-full h-full z-40 pl-6" : "hidden"} lg:sticky lg:min-w-[235px] lg:w-[235px] lg:h-[calc(-60px+110vh)] lg:top-0 lg:block pl-0`}>
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