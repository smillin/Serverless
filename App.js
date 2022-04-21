import logo from './logo.svg';
import './App.css';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ProductCardCollection } from './ui-components/ui-components';

function App() {
  return (
      <AmplifyProvider>
          <ProductCardCollection />
      </AmplifyProvider>
  );
}

export default App;
