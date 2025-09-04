import { Text } from '@chakra-ui/react';

interface LogoProps {
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ color = 'teal.400' }) => {
  return (
    <Text textStyle="logo" color={color}>
      {'}_ose'}
    </Text>
  );
};
