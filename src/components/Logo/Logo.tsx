import { Text } from '@chakra-ui/react';

type Color = {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
};

interface LogoProps {
  color?: string | Color;
}

export const Logo: React.FC<LogoProps> = ({ color = 'teal.400' }) => {
  return (
    <Text textStyle="logo" color={color}>
      {'}_ose'}
    </Text>
  );
};
