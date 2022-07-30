import { Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  value: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
};

const Answer = (props: Props) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.setStep(props.step + 1);
    props.setAnswer(props.value);
  };
  return (
    <Text padding="10px" width="50%" bg="gray.100" color="brand.blue" onClick={handleClick}>
      {props.value}
    </Text>
  );
};

export default Answer;
