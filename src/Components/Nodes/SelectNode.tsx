/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo } from 'react';
import styled from 'styled-components';
import { useNodesState } from '../../Hooks/useNodesState';
import { MeshType } from '../Objects/ObjectsGenerator';
import { CustomNodeWrapper, NodeData } from './CustomNodeWrapper';

export type SelectNodeData<T> = NodeData & {
  selectors: {
    key: string,
    label: string,
  }[]
  value: T
};

const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: none;
  margin: 0;
  padding: 0;
`;

const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const SelectNode = memo(({ id, data }: { id: string, data: SelectNodeData<MeshType> }) => {
  const { value } = data;
  const { updateNode } = useNodesState();

  return (
    <CustomNodeWrapper data={data}>
      <Container>
        {data.selectors && data.selectors.map((selectorData) => (
          <SelectorWrapper key={selectorData.key}>
            <input
              type="radio"
              value={selectorData.key}
              id={selectorData.key}
              checked={selectorData.key === value}
              onChange={() => updateNode(id, { value: selectorData.key })}
            />
            <label htmlFor={selectorData.key}>{selectorData.label}</label>
          </SelectorWrapper>
        ))}
      </Container>
    </CustomNodeWrapper>
  );
});
