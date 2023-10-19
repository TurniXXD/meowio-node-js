import { Article } from '@prisma/client';
import { mockAdmin } from './user.mock';

export const mockArticles: Article[] = [
  {
    createdAt: new Date('2024-01-10T15:45:20.123Z'),
    updatedAt: new Date('2024-01-10T15:45:20.123Z'),
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    ownerId: mockAdmin.id,
    imageId: 'splash3',
    title: 'New Article 1',
    perex: 'This is the first new article.',
    content: 'Content of the first new article...',
  },
  {
    createdAt: new Date('2024-03-25T18:20:50.500Z'),
    updatedAt: new Date('2024-03-25T18:20:50.500Z'),
    id: "4fc2ab84-4979-4da6-8c3d-2e6ac4011b21",
    ownerId: mockAdmin.id,
    imageId: 'splash4',
    title: 'New Article 2',
    perex: 'This is the second new article.',
    content: 'Content of the second new article...',
  },
];

export const mockArticle: Article = mockArticles[0];
