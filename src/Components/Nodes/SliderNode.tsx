/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo } from 'react';
import styled from 'styled-components';
import { useNodesState } from '../../Hooks/useNodesState';
import { CustomNodeWrapper, NodeData } from './CustomNodeWrapper';

export type SliderNodeData = NodeData & {
  slider: {
    label: string,
    key: string,
    value: number,
    min: number,
    max: number,
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SliderNode = memo(({ id, data }: { id: string, data: SliderNodeData }) => {
  const {
    key, min, max, label, value,
  } = data.slider;

  const { updateNode } = useNodesState();

  return (
    <CustomNodeWrapper data={data}>
      <Container>
        <label htmlFor={key}>{label}</label>
        <input
          type="range"
          name={key}
          id={key}
          min={min}
          max={max}
          value={value}
          // TODO: This should be solved better
          onChange={(e) => updateNode(id, { slider: { ...data.slider, value: parseInt(e.target.value, 10) } })}
        />
      </Container>
    </CustomNodeWrapper>
  );
});
