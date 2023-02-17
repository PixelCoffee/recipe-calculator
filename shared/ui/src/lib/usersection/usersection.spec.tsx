import { render } from '@testing-library/react';

import Usersection from './usersection';

describe('Usersection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Usersection />);
    expect(baseElement).toBeTruthy();
  });
});
