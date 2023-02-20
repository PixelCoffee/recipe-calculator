import { render } from '@testing-library/react';

import Pagecontent from './pagecontent';

describe('Pagecontent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pagecontent />);
    expect(baseElement).toBeTruthy();
  });
});
