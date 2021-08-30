import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Body from 'components/welcome/body/Body';
import Header from 'components/header/Header';
import { COLOR } from 'global/styles';
import SmartBanner from 'components/Banners/SmartBanner';
import { UMP } from 'react-native-ad-consent';
import { useDispatch, useSelector } from 'react-redux';
import { updateConsent, updatePersonlization } from 'store/action/information';

const Welcome = ({ navigation }) => {
  const consentProvided = useSelector(
    state => state.information.consentProvided,
  );
  const dispatch = useDispatch();
  const getConsent = async () => {
    const { consentStatus, isRequestLocationInEeaOrUnknown } =
      await UMP.requestConsentInfoUpdate({
        debugGeography: UMP.DEBUG_GEOGRAPHY.EEA,
        testDeviceIds: ['FB08E555F71ED2ED87241A3FE233F6A8'],
      });
    if (
      consentStatus === UMP.CONSENT_STATUS.REQUIRED &&
      isRequestLocationInEeaOrUnknown
    ) {
      navigation.replace('Modal', {
        type: 'consent',
        title: 'Consent',
      });
    } else {
      dispatch(updateConsent());
    }
  };

  useEffect(() => {
    if (consentProvided) {
      getConsent().catch(err => {
        dispatch(updatePersonlization(false));
        console.log(err);
      });
    }
  }, []);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <StatusBar backgroundColor={COLOR.accent} />
        <Header title="Truth or Dare?" />
        <Body />
      </ScrollView>
      {consentProvided && <SmartBanner />}
    </>
  );
};

export default Welcome;
