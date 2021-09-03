import React from 'react';
import About from 'components/settings/about/About';
import Attribution from 'components/settings/attribution/Attribution';
import Consent from 'components/settings/consent/Consent';

const Modal = ({ route }) => {
  const { type } = route?.params;
  let Component;
  switch (type) {
    case 'about':
      Component = About;
      break;
    case 'attribution':
      Component = Attribution;
      break;
    case 'consent':
      Component = Consent;
      break;
  }

  if (!Component) {
    return null;
  }

  return <Component />;
};

export default Modal;
