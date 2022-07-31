import Question from 'src/components/question';
import Answer from 'src/components/answer';
import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { API_URL } from 'src/utils/api.utils';
import { sentTest } from '@types';
import { Text } from '@chakra-ui/react';

const Quiz = (props: any) => {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    axios.post(`${API_URL}/quiz/${step}`, { answer }).then((res) => {
      const quiz: sentTest = res.data?.quiz;

      if (res.data?.result) {
        props.setResult(res.data.result);
        return;
      }

      setQuestion(quiz?.test);
      setChoices(quiz?.choices as never[]);
    });
  }, [step, answer, props]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '80%',
        height: '100vh',
      }}
    >
      <Text bg="whiteAlpha.100" color="gray.400">
        Step {step}
      </Text>
      <Question value={question}></Question>
      {choices?.map((choice) => (
        <Answer key={choice} value={choice} step={step} setStep={setStep} setAnswer={setAnswer} />
      ))}
    </div>
  );
};

export default Quiz;
