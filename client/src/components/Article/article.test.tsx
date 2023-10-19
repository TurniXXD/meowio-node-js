import React from 'react';
import Article from './index';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-i18next', () => ({
  useTranslation: (namespace: string) => ({
    t: (key: string) => key,
  }),
}));

describe('Article Component', () => {
  const mockArticle = {
    articleId: '550e8400-e29b-41d4-a716-446655440000',
    perex: 'Sample perex',
    title: 'Sample Title',
    imageId: 'f47ac10b',
    createdAt: new Date(),
    lastUpdatedAt: new Date(),
  };

  it('renders correctly with all props', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Article props={mockArticle} />
      </BrowserRouter>
    );

    // Check if the article title and perex are rendered
    expect(screen.getByText('Sample Title')).toBeInTheDocument();
    expect(screen.getByText('Sample perex')).toBeInTheDocument();

    // Add more assertions for other elements if necessary
  });

  it('renders nothing when any prop is missing', () => {
    // Render the component with missing props (empty object)
    const { queryByText } = render(
      <BrowserRouter>
        <Article props={{}} />
      </BrowserRouter>
    );

    // Check if the component renders nothing (null is returned)
    expect(screen.queryByText('Sample Title')).toBeNull();
  });

  // Add more test cases for edge cases and different scenarios
});
