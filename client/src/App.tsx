import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './utils/custom.chakra';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './routes/quiz.route';
import { useState } from 'react';
import Landing from './routes/landing.route';
import Result from './routes/result.route';

function App() {
  const [result, setResult] = useState('');
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/quiz" element={result ? <Result value={result} /> : <Quiz setResult={setResult} />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
