import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => (
  <div data-testid="loader" className={'loader'}>
    <div className={'loader__animation'}>
    </div>
  </div>
);

export default Loader;