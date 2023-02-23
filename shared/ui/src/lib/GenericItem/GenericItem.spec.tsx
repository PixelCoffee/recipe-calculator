import { render } from '@testing-library/react';

import GenericItem from './GenericItem';

describe('GenericItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenericItem />);
    expect(baseElement).toBeTruthy();
  });
});
