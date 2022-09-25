import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {

  const models = [
    {name: 'Corvette', image: 'corvette'},
    {name: 'Mustang', image: 'mustang'},
    {name: 'Audi R8', image: 'audi-r8'},
    {name: 'Ferrari 458', image: 'ferrari-458'},
    {name: 'Lamborghini Aventador', image: 'lamborghini'},
    {name: 'Camaro', image: 'camaro'}
  ];

  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map((modelName, i) => (
            <ModelSection
              className="colored"
              modelName={modelName.name}
              img={modelName.image}
              key={modelName.name}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName.name}
                  description="Order online for Delivery"
                />
              } />
          ))
          }
        </div>
        <Spacer/>
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
