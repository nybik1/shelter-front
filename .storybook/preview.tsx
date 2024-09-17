import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <main className={roboto.className}>
        <Story />
      </main>
    ),
  ],
};

export default preview;
