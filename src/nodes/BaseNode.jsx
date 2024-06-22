import { useState } from 'react';
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
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleInputTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    );
  } else if (type === 'Output') {
    content = (
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label>
          Type:
          <select value={outputType} onChange={handleOutputTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    );
  } else if (type === 'Text') {
    content = (
      <div>
        <label>
          Text:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
      </div>
    );
  } else if (type === 'LLM') {
    content = (
      <div>
        <span>This is a LLM.</span>
      </div>
    );
  } else if (type === 'Slider') {
    content = (
      <div>
        <label>
          Slider:
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderValue} 
            onChange={handleSliderChange} 
          />
        </label>
        <span>{sliderValue}</span>
      </div>
    );
  } else if (type === 'Checkbox') {
    content = (
      <div>
        <label>
          Checkbox:
          <input 
            type="checkbox" 
            checked={checkbox} 
            onChange={handleCheckboxChange} 
          />
        </label>
      </div>
    );
  } else if (type === 'Dropdown') {
    content = (
      <div>
        <label>
          Dropdown:
          <select value={dropdown} onChange={handleDropdownChange}>
            <option value="Option1">Option1</option>
            <option value="Option2">Option2</option>
            <option value="Option3">Option3</option>
          </select>
        </label>
      </div>
    );
  } else if (type === 'ColorPicker') {
    content = (
      <div>
        <label>
          Color:
          <input 
            type="color" 
            value={color} 
            onChange={handleColorChange} 
          />
        </label>
      </div>
    );
  } else if (type === 'DatePicker') {
    content = (
      <div>
        <label>
          Date:
          <input 
            type="date" 
            value={date} 
            onChange={handleDateChange} 
          />
        </label>
      </div>
    );
  }

  return (
    <div style={{ width: 200, height: 100, border: '1px solid black', padding: '10px' }}>
      <div>
        <span>{type}</span>
      </div>
      {content}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};
