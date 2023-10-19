import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateArticleForm from './index';
import axios from 'axios';

jest.mock('react-i18next', () => ({
  useTranslation: (namespace: string) => ({
    t: (key: string) => key,
  }),
}));

jest.mock('axios');

describe('CreateArticleForm', () => {
  test('submits the form with mock values', async () => {
    const mockArticle = {
      title: 'Test Article',
      image: [new File(['image data'], 'test.png', { type: 'image/png' })],
      perex: 'Test perex',
      content: 'Test content',
    };

    // Render the component
    render(<CreateArticleForm />);

    // Fill in the form fields with mock values
    const titleInput = screen.getByLabelText('Article Title');
    fireEvent.change(titleInput, { target: { value: mockArticle.title } });

    // Assuming you have a custom upload component that triggers onChange with selected file(s)
    const uploadButton = screen.getByText('Upload Image');
    fireEvent.change(uploadButton, {
      target: {
        files: mockArticle.image,
      },
    });

    const perexInput = screen.getByLabelText('Perex');
    fireEvent.change(perexInput, { target: { value: mockArticle.perex } });

    const contentInput = screen.getByLabelText('Content');
    fireEvent.change(contentInput, { target: { value: mockArticle.content } });

    // Submit the form
    const publishButton = screen.getByText('Publish Article');
    fireEvent.click(publishButton);

    // Wait for form submission to complete (you may need to wait for API calls)
    await waitFor(() => {
      // Wait for the success popup to appear
      const successPopup = screen.getByText('Article created successfully');
      expect(successPopup).toBeInTheDocument();
    });

    // Assert that the form fields are reset after submission
    expect(titleInput).toHaveValue('');
    expect(perexInput).toHaveValue('');
    expect(contentInput).toHaveValue('');
  });

  // Add more tests for error scenarios, validations, etc. if needed
});
