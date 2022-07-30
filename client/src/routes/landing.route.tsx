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
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
      }}
      onClick={handleStart}
    >
      <Badge size="md" bg="gray.700" color="brand.orange">
        Start Quiz
      </Badge>
    </div>
  );
};

export default Landing;
