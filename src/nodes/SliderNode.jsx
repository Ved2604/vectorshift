import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const SliderNode = ({ id, data }) => {
  const handles = [
    { id: 'value', type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="Slider"
      handles={handles}
    />
  );
};
