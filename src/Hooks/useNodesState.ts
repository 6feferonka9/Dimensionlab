/* eslint-disable max-len */
import { applyNodeChanges, NodeChange } from 'reactflow';
import { atom, useRecoilState } from 'recoil';
import { initialNodes } from '../Data/NodesInitialState';

const nodesState = atom({
  key: 'nodes',
  default: initialNodes,
});

export const useNodesState = () => {
  const [nodes, setNodes] = useRecoilState(nodesState);

  // TODO: check if it is possible to have faster solution than loop thru array
  const updateNode = (id: string, newData: {}) => {
    setNodes((value) => value.map((item) => (item.id === id ? { ...item, data: { ...item.data, ...newData } } : item)));
  };

  const onNodesChange = (data: NodeChange[]) => {
    setNodes((value) => applyNodeChanges(data, value));
  };

  const getNodeData = <T>(id: string) => nodes.find((item) => item.id === id)?.data as (T | null);

  return {
    nodes,
    updateNode,
    getNodeData,
    onNodesChange,
  };
};
