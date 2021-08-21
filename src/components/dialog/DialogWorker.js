import React from 'react';
import Error from './game/Error';
import RemoveAdsTemp from './settings/ads/RemoveAdsTemp';
import { property } from 'global/constants';

const DialogWorker = ({
  Name,
  negativeHandler,
  positiveHandler,
  params,
  closeDialogHandler,
}) => {
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
    case 'RemoveAdsTemporary':
      Name = RemoveAdsTemp;
      title = property.removeAdsTempTitle;
      body = property.removeAdsTempBody;
      break;
  }

  return (
    <Name
      params={params}
      negativeHandler={negativeHandler}
      positiveHandler={positiveHandler}
      title={title}
      closeDialogHandler={closeDialogHandler}
      body={body}
    />
  );
};

export default DialogWorker;
