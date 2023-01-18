/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo } from 'react';
import styled from 'styled-components';
import { useNodesState } from '../../Hooks/useNodesState';
import { CustomNodeWrapper, NodeData } from './CustomNodeWrapper';

export type ColorPickerNodeData = NodeData & {
  key: string,
  value: string,
  inputLabel: string,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ColorPickerNode = memo(({ id, data }: { id: string, data: ColorPickerNodeData }) => {
  const { key, inputLabel, value } = data;
  const { updateNode } = useNodesState();

  return (
    <CustomNodeWrapper data={data}>
      <Container>
        <input
          type="color"
          defaultValue={value}
          name={key}
          id={key}
          onChange={(e) => updateNode(id, { value: e.target.value })}
        />
        <label htmlFor="color">{inputLabel}</label>
      </Container>
    </CustomNodeWrapper>
  );
});
