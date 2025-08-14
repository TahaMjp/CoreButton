// src/Components/CoreButton/tests/helpers.js

import React from 'react';
import { render } from '@testing-library/react';
import CoreButton from '../CoreButton';

// Default props used for rendering CoreButton in tests
export const defaultProps = {
  text: 'Click Me', // Make sure this matches the actual default in CoreButton
  size: 'md',
  variant: 'solid',
  color: 'blue',
  disabled: false,
  ariaLabel: 'Click Me'
};

// Helper to render CoreButton with custom props
export const renderCoreButton = (props = {}) => {
  return render(<CoreButton {...defaultProps} {...props} />);
};
