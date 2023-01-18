import { Handle, Position } from 'reactflow';
import styled from 'styled-components';

export type NodeData = {
  label: string,
};

type Props = {
  data: NodeData
  children: React.ReactNode
};

const Wrapper = styled.div`
  border: 2px solid #e8e8e8;
  border-radius: 6px;
  transition: border .125s;

  &:hover {
    border: 2px solid #fba8a8;
  }
`;

const Label = styled.div`
  padding: 6px 12px;
  border-bottom: 1px solid #bababa;
`;

const Content = styled.div`
  padding: 6px 12px;
`;

export function CustomNodeWrapper({ data, children } : Props) {
  return (
    <Wrapper>
      <Handle type="source" position={Position.Bottom} />
      <Label className="dragable-label">{data.label}</Label>
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}
