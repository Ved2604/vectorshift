// BaseNode.jsx
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, type, handles }) => {
  const [nodeData, setNodeData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNodeData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ width: 200, height: 100, border: '1px solid black', padding: '10px' }}>
      <div>
        <span>{type}</span>
      </div>
      {Object.keys(nodeData).map((key) => (
        <div key={key}>
          <label>
            {key}:
            <input
              type="text"
              name={key}
              value={nodeData[key]}
              onChange={handleChange}
            />
          </label>
        </div>
      ))}
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
