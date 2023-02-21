import { render } from '@testing-library/react';

import NavSignup from './NavSignup';

describe('NavSignup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavSignup />);
    expect(baseElement).toBeTruthy();
  });
});
