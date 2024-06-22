import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const CheckboxNode = ({ id, data }) => {
  const handles = [
    { id: 'value', type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="Checkbox"
      handles={handles}
    />
  );
};
