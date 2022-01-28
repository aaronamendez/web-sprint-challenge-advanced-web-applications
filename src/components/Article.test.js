import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react';

const mockData1 = {
	id: 'aMqwd',
	headline: 'headline',
	author: 'Aaron Mendez',
	createdOn: '2021-08-09T18:02:38-04:00',
	summary: 'summary',
	body: '',
};

const mockData2 = {
	id: 'aMqwd',
	headline: 'headline',
	createdOn: '2021-08-09T18:02:38-04:00',
	summary: 'summary',
	body: '',
};

test('renders component without errors', () => {
	const handleDelete = jest.fn();
	const handleEdit = jest.fn();
	render(
		<Article
			article={mockData1}
			handleDelete={handleDelete}
			handleEditSelect={handleEdit}
		/>
	);
});

test('renders headline, author from the article when passed in through props', () => {
	const handleDelete = jest.fn();
	const handleEdit = jest.fn();
	render(
		<Article
			article={mockData1}
			handleDelete={handleDelete}
			handleEditSelect={handleEdit}
		/>
	);

	const headline = screen.queryByTestId(/headline/i);
	const author = screen.queryByTestId(/author/i);

	expect(headline).toContainHTML('headline');
	expect(author).toContainHTML('By Aaron Mendez');
});

test('renders "Associated Press" when no author is given', () => {
	const handleDelete = jest.fn();
	const handleEdit = jest.fn();
	render(
		<Article
			article={mockData2}
			handleDelete={handleDelete}
			handleEditSelect={handleEdit}
		/>
	);

	const author = screen.queryByTestId(/author/i);
	expect(author).toContainHTML('By Associated Press');
});

test('executes handleDelete when the delete button is pressed', () => {
	const handleDelete = jest.fn();
	const handleEdit = jest.fn();
	render(
		<Article
			article={mockData2}
			handleDelete={handleDelete}
			handleEditSelect={handleEdit}
		/>
	);
	const deleteButton = screen.queryByTestId('deleteButton');
	userEvent.click(deleteButton);
	expect(handleDelete).toBeCalled();
});

// //Task List:
// //1. Complete all above tests. Create test article data when needed.
