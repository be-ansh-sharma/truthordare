import React from 'react';
import Error from './game/Error';
import { property } from 'global/constants';

const DialogWorker = ({ Name, closeDialogHandler, params }) => {
  let title;
  let body;
  if (!Name) {
    return null;
  }

  switch (Name) {
    case 'NoCard':
      Name = Error;
      title = property.noCardTitle;
      body = property.noCardBody;
      break;
    case 'General':
      Name = Error;
      title = property.generalErrorTitle;
      body = property.generalErrorBody;
      break;
  }

  return (
    <Name
      params={params}
      closeDialogHandler={closeDialogHandler}
      title={title}
      body={body}
    />
  );
};

export default DialogWorker;
