import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/solid';

const FilterSidebar = () => {
  const [openSection, setOpenSection] = useState({
    subject: false,
    type: false,

  });

  const toggleSection = (section) => {
    setOpenSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <aside className="w-64 bg-white shadow-lg rounded-2xl p-4 space-y-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Filter</h2>

      {/* Section วิชา */}
      <div className="border rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection("subject")}
          className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
        >
          วิชา
          {/* <span>{openSection === "subject" ? "▲" : "▼"}</span> */}
          <ChevronDownIcon
            className={`h-5 w-5 transform transition-transform duration-300
              ${openSection.subject ? 'rotate-180' : ''}
            `}
          />
        </button>
        {openSection.subject && (
          <div className="p-3 space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 text-blue-500" />
              <span>วิชา A</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 text-blue-500" />
              <span>วิชา B</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 text-blue-500" />
              <span>วิชา C</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 text-blue-500" />
              <span>วิชา D</span>
            </label>
          </div>
        )}
      </div>

      {/* Section ประเภทหนังสือ */}
      <div className="border rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection("type")}
          className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
        >
          ประเภทหนังสือ
          {/* <span>{openSection === "type" ? "▲" : "▼"}</span> */}
          <ChevronDownIcon
            className={`h-5 w-5 transform transition-transform duration-300
              ${openSection.type ? 'rotate-180' : ''}
            `}
          />
        </button>
        {openSection.type && (
          <div className="p-3 space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 text-blue-500" />
              <span>E-Book</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 text-blue-500" />
              <span>Hardcover</span>
            </label>
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;