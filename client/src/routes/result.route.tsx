import { Badge } from '@chakra-ui/react';

const Result = (props: { value: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
      }}
    >
      <Badge size="md" bg="gray.700" color="brand.orange">
        {props.value}
      </Badge>
    </div>
  );
};

export default Result;
