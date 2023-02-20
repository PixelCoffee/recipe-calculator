import { render } from '@testing-library/react';

import Navlistitem from './navlistitem';

describe('Navlistitem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navlistitem />);
    expect(baseElement).toBeTruthy();
  });
});
