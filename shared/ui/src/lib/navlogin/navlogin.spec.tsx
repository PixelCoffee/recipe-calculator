import { render } from '@testing-library/react';

import Navlogin from './navlogin';

describe('Navlogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navlogin />);
    expect(baseElement).toBeTruthy();
  });
});
