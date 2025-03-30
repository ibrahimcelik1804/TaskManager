import {ApplicationProvider} from '@ui-kitten/components';
import RootNavigation from './src/router/rootNavigation';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
