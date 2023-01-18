/* eslint-disable react/no-unknown-property */
import { Handle, Position } from 'reactflow';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { memo } from 'react';
import { useNodesState } from '../../Hooks/useNodesState';
// import { ColorPickerNodeData } from './ColorPicker';
import { SelectNodeData } from './SelectNode';
import { SliderNodeData } from './SliderNode';
import { MeshType, ObjectsGenerator } from '../Objects/ObjectsGenerator';

const Container = styled.div`
  background: #292929;
`;

// TODO: The camera zoom would be done here
// function ThreeState() {
//   const state = useThree();
//   // console.log(state.camera.zoom = 10);
//   return null;
// }

export const CanvasNode = memo(() => {
  const { getNodeData } = useNodesState();
  const objectType = getNodeData<SelectNodeData<MeshType>>('2')?.value;
  const amountOfElements = getNodeData<SliderNodeData>('3')?.slider.value;
  // const color = getNodeData<ColorPickerNodeData>('4')?.value;
  // const cameraZoom = getNodeData<SliderNodeData>('5')?.slider.value;

  return (
    <Container>
      <Handle
        type="target"
        position={Position.Top}
      />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ObjectsGenerator amount={amountOfElements} type={objectType} />
      </Canvas>
    </Container>
  );
});
