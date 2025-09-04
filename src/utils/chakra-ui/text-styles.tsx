import { defineTextStyles } from '@chakra-ui/react';

export const textStyles = defineTextStyles({
  logo: {
    value: {
      fontFamily: `'Fira Code', 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'monospace', 'sans-serif'`,
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: '2.063rem',
      fontStyle: 'normal'
    }
  },
  'headline-1': {
    value: {
      fontFamily: `'Poppins', 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'monospace', 'sans-serif'`,
      fontWeight: 900,
      fontSize: '4.375rem',
      lineHeight: 1.2,
      fontStyle: 'normal'
    }
  }
});
