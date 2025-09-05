import { Text } from '@chakra-ui/react';

export const Copyright: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <Text fontSize="sm" fontWeight={300} mt="auto">
      &copy; {year} Solomon Ezeobika. All Rights Reserved.
    </Text>
  );
};
