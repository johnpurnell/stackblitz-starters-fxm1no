import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
<>
  <h2>I added this header</h2>
  
  <StrictMode>
      <App />
  </StrictMode>
</>
);
