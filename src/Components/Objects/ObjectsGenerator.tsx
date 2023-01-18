import { memo } from 'react';
import { Vector3 } from '@react-three/fiber';
import { MathUtils } from 'three';
import { Box } from './Box';
import { Pyramid } from './Pyramid';
import { Sphere } from './Sphere';

// TODO: This file could be done differently
// TODO: Share with selector node
export enum MeshType {
  CUBE = 'cube',
  SPHERE = 'sphere',
  PYRAMID = 'pyramid',
}

const getRandomPositionInSpace = (): Vector3 => [
  MathUtils.randFloat(-2, 2),
  MathUtils.randFloat(-2, 2),
  MathUtils.randFloat(-2, 2),
];

function ObjectSwitcher({ type }: { type: MeshType }) {
  switch (type) {
    case MeshType.CUBE:
      return <Box position={getRandomPositionInSpace()} />;
    case MeshType.SPHERE:
      return <Sphere position={getRandomPositionInSpace()} />;
    case MeshType.PYRAMID:
      return <Pyramid position={getRandomPositionInSpace()} />;
    default: return null;
  }
}

export const ObjectsGenerator = memo(({ amount, type }: { amount?: number, type?: MeshType }) => (
  <>
    {(type && amount) && new Array(amount).fill(type).map((_type, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <ObjectSwitcher type={_type} key={_type + i} />
    ))}
    <mesh />
  </>
));
