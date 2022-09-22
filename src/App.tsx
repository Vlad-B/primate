import React, { useState, useEffect } from 'react';
import {
  IonApp,
  setupIonicReact
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css'
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

// assets
import './assets/styles/app.css';
// project imports
import Onboarding from './components/Onboarding';
import SplashScreen from './components/SplashScreen';

setupIonicReact();

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => { 
      setIsLoaded(false); 
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
  <IonApp className='app'>
    {!isLoaded ? <Onboarding /> : <SplashScreen />}
  </IonApp>
)};

export default App;
