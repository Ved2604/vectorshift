import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const ColorPickerNode = ({ id, data }) => {
  const handles = [
    { id: 'value', type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="ColorPicker"
      handles={handles}
    />
  );
};
