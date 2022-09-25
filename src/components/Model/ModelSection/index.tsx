import React, { useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container, Image } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode // Elemento React
  img?: string
}

const ModelSection: React.FC<Props> = ({ 
  modelName, 
  overlayNode,
  img,
  children, 
  ...props  }) => {

  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect( () => {
    if (sectionRef.current) {
      registerModel({
        modelName, overlayNode,  sectionRef
      })
    }
  }, [] )

  return (
    <Container ref={sectionRef} { ...props }>
      <h1>{ children }</h1>
      <Image>
        <img src={  '/assets/images/' + img + '.jpg' } />
      </Image>
    </Container>
  );
};

export default ModelSection;
