import React from 'react';

const Modal = ({ route, navigation }) => {
  const { type } = route?.params;
  let Component;
  // switch (type) {
  //   case 'about':
  //     Component = About;
  //     break;
  //   case 'privacy':
  //     Component = Privacy;
  //     break;
  //   case 'attribution':
  //     Component = Attribution;
  //     break;
  //   case 'celebration':
  //     Component = Celebration;
  //     break;
  // }

  if (!Component) {
    return null;
  }

  return <Component />;
};

export default Modal;
