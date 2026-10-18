import React from 'react';
import { useAppContext } from './context/AppContext';
import WelcomeScreen from './components/WelcomeScreen';
import OnboardingFlow from './components/OnboardingFlow';
import TutorScreen from './components/TutorScreen';
import { AppScreen } from './types';

const App: React.FC = () => {
  const { screen } = useAppContext();

  const renderScreen = () => {
    switch (screen) {
      case AppScreen.WELCOME:
        return <WelcomeScreen />;

      case AppScreen.ONBOARDING:
        return <OnboardingFlow />;

      case AppScreen.TUTOR:
        return <TutorScreen />;

      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <main className="bg-gradient-to-br from-[#0B0C10] to-[#1F2833] text-white min-h-screen w-full flex flex-col items-center justify-center font-sans">
      {renderScreen()}
    </main>
  );
};

export default App;