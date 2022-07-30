import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Question from './components/question';
import { theme } from './utils/custom.chakra';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Question value="How are you?"></Question>
      </div>
    </ChakraProvider>
  );
}

export default App;
