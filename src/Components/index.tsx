import ReactFlow, {
  Background,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { CanvasNode } from './Nodes/CanvasNode';
import { SelectNode } from './Nodes/SelectNode';
import { ColorPickerNode } from './Nodes/ColorPicker';
import { SliderNode } from './Nodes/SliderNode';
import { initialEdges } from '../Data/NodesInitialState';
import { useNodesState } from '../Hooks/useNodesState';

const nodeTypes = {
  canvas: CanvasNode,
  selectShape: SelectNode,
  objectCount: SliderNode,
  colorPicker: ColorPickerNode,
  canvasZoom: SliderNode,
};

export function Flow() {
  const { nodes, onNodesChange } = useNodesState();
  const [edges] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      nodeTypes={nodeTypes}
    >
      <Background />
    </ReactFlow>
  );
}
