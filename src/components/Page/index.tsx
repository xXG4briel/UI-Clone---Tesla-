import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {

  const images = [
    // '3.894 accessories-m.avif',
    'model-s.avif',
    'model-y.avif',
    'model-3.avif',
    'model-x.avif',
    'solar-panels.avif',
    'solar-roof.avif',
    'accessories.avif'
    // '6.640 model-3-m.avif',
    // '16.276 model-s-m.avif',
    // '15.559 model-x-m.avif',
    // '34.413 model-y-m.avif',
    // '18.367 solar-panels-m.avif',
    // '21.744 solar-roof-m.avif',
  ]
  const models = [
    {name: 'Model S', image: 'model-s'},
    {name: 'Model Y', image: 'model-y'},
    {name: 'Model 3', image: 'model-3'},
    {name: 'Model X', image: 'model-x'},
    {name: 'Solar Panels', image: 'solar-panels'},
    {name: 'Solar Roof', image: 'solar-roof'},
    {name: 'Accessories', image: 'accessories'},
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
