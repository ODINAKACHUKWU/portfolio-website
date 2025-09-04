'use client';

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig
} from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';
import type { ColorModeProviderProps } from './color-mode';
import { textStyles } from './text-styles';

const config = defineConfig({
  globalCss: {
    '*, ::before, ::after': {
      boxSizing: 'border-box'
    },
    'html, body': {
      margin: 0,
      padding: 0
    },
    body: {
      fontFamily: `'Poppins', 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'`
    }
  },
  theme: {
    textStyles
  }
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
