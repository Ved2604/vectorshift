import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, type, handles }) => {  
  const [currName, setCurrName] = useState(data?.inputName || data?.outputName || data?.sliderValue || data?.checkbox || data?.dropdown || data?.color || data?.date || id.replace('customInput-', 'input_').replace('customOutput-', 'output_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');
  const [outputType, setOutputType] = useState(data.outputType || 'Text');
  const [sliderValue, setSliderValue] = useState(data.sliderValue || 50);
  const [checkbox, setCheckbox] = useState(data.checkbox || false);
  const [dropdown, setDropdown] = useState(data.dropdown || 'Option1');
  const [color, setColor] = useState(data.color || '#000000');
  const [date, setDate] = useState(data.date || new Date().toISOString().split('T')[0]);
  const [text, setText] = useState(data.text || '');
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const detectedVariables = text.match(/{{\s*[\w\d_]+\s*}}/g) || [];
    const uniqueVariables = Array.from(new Set(detectedVariables.map(v => v.replace(/{{\s*|\s*}}/g, ''))));
    setVariables(uniqueVariables);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleInputTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handleOutputTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

  const handleDropdownChange = (e) => {
    setDropdown(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  let content;
  if (type === 'Input') {
    content = (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Type:
          <select 
            value={inputType} 
            onChange={handleInputTypeChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    );
  } else if (type === 'Output') {
    content = (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Type:
          <select 
            value={outputType} 
            onChange={handleOutputTypeChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    );
  } else if (type === 'Text') {
    content = (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Text:
          <textarea 
            value={text} 
            onChange={handleTextChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none overflow-auto"
            rows="3"
          />
        </label>
      </div>
    );
  } else if (type === 'LLM') {
    content = (
      <div className="text-sm font-medium text-gray-700">
        This is an LLM.
      </div>
    );
  } else if (type === 'Slider') {
    content = (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Slider:
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderValue} 
            onChange={handleSliderChange}
            className="mt-1 block w-full"
          />
        </label>
        <span>{sliderValue}</span>
      </div>
    );
  } else if (type === 'Checkbox') {
    content = (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Checkbox:
          <input 
            type="checkbox" 
            checked={checkbox} 
            onChange={handleCheckboxChange}
            className="ml-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </label>
      </div>
    );
  } else if (type === 'Dropdown') {
    content = (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Dropdown:
          <select 
            value={dropdown} 
            onChange={handleDropdownChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Option1">Option1</option>
            <option value="Option2">Option2</option>
            <option value="Option3">Option3</option>
          </select>
        </label>
      </div>
    );
  } else if (type === 'ColorPicker') {
    content = (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Color:
          <input 
            type="color" 
            value={color} 
            onChange={handleColorChange}
            className="mt-1 block w-full h-10 p-0 border-none"
          />
        </label>
      </div>
    );
  } else if (type === 'DatePicker') {
    content = (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Date:
          <input 
            type="date" 
            value={date} 
            onChange={handleDateChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg space-y-2 w-full">
      <div className="text-lg font-semibold text-gray-800">
        {type}
      </div>
      {content}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          className="w-3 h-3 bg-blue-500 border-none rounded-full"
          style={handle.style}
        />
      ))}
      {variables.map((variable, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={`${id}-var-${variable}`}
          className="w-3 h-3 bg-green-500 border-none rounded-full"
          style={{ top: `${(100 / 20) * index}%` }}
        />
      ))}
    </div>
  );
};
