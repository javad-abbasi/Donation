import React, {useEffect, useRef} from 'react';
import RootNavigation from './navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Store, {persistor} from './Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {AppState} from 'react-native';
import {checkToken} from './api/user';


const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('You have come back into the app');
          await checkToken();
          //we are coming from background to the foreground
        }

        appState.current = nextAppState;
      },
    );
    checkToken();
    console.log('Application has rendered');
  }, []);
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
