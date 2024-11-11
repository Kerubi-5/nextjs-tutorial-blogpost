// const React = require('react');
// const App = require('./app');

// const { render } = require('@testing-library/react');
// const { axe, toHaveNoViolations } = require('jest-axe');
// expect.extend(toHaveNoViolations);

// it('should demonstrate this matcher`s usage with react testing library', async () => {
//   const { container } = render(<App />);
//   const results = await axe(container);

//   expect(results).toHaveNoViolations();
// });

import { render, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from '@/app/page';

it('should not violate any a11y', async () => {
  const { container } = render(<App />);

  await waitFor(async () => {
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
