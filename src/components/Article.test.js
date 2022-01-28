import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
// import { render } from 'react-dom';
import { render, screen } from '@testing-library/react';

test('renders component without errors', () => {
	render(<Article article={[]} handleDelete={[]} handleEditSelect={[]} />);
});

test('renders headline, author from the article when passed in through props', () => {
	render(<Article article={[]} handleDelete={[]} handleEditSelect={[]} />);

	const headline = screen.getByTestId(/headline/i);
	const author = screen.getByTestId(/author/i);

	expect(headline).toBeInTheDocument();
	expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
	render(<Article article={[]} handleDelete={[]} handleEditSelect={[]} />);

	expect();
});

test('executes handleDelete when the delete button is pressed', () => {});

//Task List:
//1. Complete all above tests. Create test article data when
