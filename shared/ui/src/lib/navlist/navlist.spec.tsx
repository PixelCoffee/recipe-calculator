import { render } from '@testing-library/react';

import Navlist from './navlist';

describe('Navlist', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navlist />);
    expect(baseElement).toBeTruthy();
  });
});
