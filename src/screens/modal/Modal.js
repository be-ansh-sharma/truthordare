import React from 'react';
import About from 'components/settings/about/About';
import Attribution from 'components/settings/attribution/Attribution';
import Privacy from 'components/settings/privacy/Privacy';
import Consent from 'components/settings/consent/Consent';

const Modal = ({ route }) => {
  const { type } = route?.params;
  let Component;
  switch (type) {
    case 'about':
      Component = About;
      break;
    case 'privacy':
      Component = Privacy;
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
