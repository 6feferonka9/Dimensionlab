import { Edge, Node } from 'reactflow';
import type { SelectNodeData } from '../Components/Nodes/SelectNode';
import { MeshType } from '../Components/Objects/ObjectsGenerator';

// TODO: use TS here

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'canvas',
    data: { label: 'CANVAS' },
    position: { x: 400, y: 300 },
  },
  {
    id: '2',
    type: 'selectShape',
    data: {
      label: 'SHAPE TYPE',
      selectors: [
        {
          key: 'cube',
          label: 'Cube',
        },
        {
          key: 'pyramid',
          label: 'Pyramid',
        },
        {
          key: 'sphere',
          label: 'Sphere',
        },
      ],
      value: 'cube',
    },
    position: { x: 100, y: 20 },
  } as Node<SelectNodeData<MeshType>>,
  {
    id: '3',
    type: 'objectCount',
    data: {
      label: 'OBJECT COUNT',
      slider: {
        key: 'objects',
        label: 'Change amount of objects',
        value: 10,
        min: 0,
        max: 100,
      },
    },
    position: { x: 450, y: 20 },
    dragHandle: '.dragable-label',
  },
  {
    id: '4',
    type: 'colorPicker',
    data: {
      label: 'SHAPE COLOR',
      value: '#d83d3d',
      inputLabel: 'Select color',
    },
    position: { x: 900, y: 20 },
  },
  {
    id: '5',
    type: 'canvasZoom',
    data: {
      label: 'CANVAS ZOOM',
      slider: {
        key: 'zoom',
        label: 'Change zoom',
        value: 1,
        min: 1,
        max: 3,
      },
    },
    position: { x: 700, y: 120 },
    dragHandle: '.dragable-label',
  },
];

export const initialEdges: Edge[] = [
  {
    id: 'e2-1',
    source: '2',
    target: '1',
    animated: true,
  },
  {
    id: 'e3-1',
    source: '3',
    target: '1',
    animated: true,
  },
  {
    id: 'e4-1',
    source: '4',
    target: '1',
    animated: true,
  },
  {
    id: 'e5-1',
    source: '5',
    target: '1',
    animated: true,
  },
];
