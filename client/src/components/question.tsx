import { Text } from '@chakra-ui/react';

type Props = {
  value: string;
};

const Question = (props: Props) => {
  return <Text>{props.value}</Text>;
};

export default Question;
