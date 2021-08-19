import React from 'react';
import About from 'components/about/About';

const Modal = ({ route, navigation }) => {
  const { type } = route?.params;
  let Component;
  switch (type) {
    case 'about':
      Component = About;
      break;
    // case 'privacy':
    //   Component = Privacy;
    //   break;
    // case 'attribution':
    //   Component = Attribution;
  }

  if (!Component) {
    return null;
  }

  return <Component />;
};

export default Modal;
