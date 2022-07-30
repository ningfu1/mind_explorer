import { Badge } from '@chakra-ui/react';

const Landing = () => {
  const handleStart = () => {
    window.location.pathname = '/quiz';
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
      }}
    >
      <Badge size="sm" bg="whiteAlpha.100" borderRadius="0px">
        Hi there! What is your personality type? Let's find out
      </Badge>
      <Badge size="md" bg="gray.300" color="brand.orange" onClick={handleStart}>
        Start Personality Test
      </Badge>
    </div>
  );
};

export default Landing;
