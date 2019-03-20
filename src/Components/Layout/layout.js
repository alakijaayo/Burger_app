import React from 'react';

import Aux from '../../HOC/aux';

const layout = ( props ) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
