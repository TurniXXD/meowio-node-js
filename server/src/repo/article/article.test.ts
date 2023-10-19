import { PrismaClient } from '@prisma/client';
import { mockArticle } from '@/mocks/article.mock';
import { mockAdmin } from '@/mocks/user.mock';

const prisma = new PrismaClient();

describe('Find newly created article by ID', () => {
  afterAll(async () => {
    // Remove created article
    await prisma.article.delete({
      where: { id: mockArticle.id },
    });

    // Remove admin
    await prisma.user.delete({
      where: { id: mockAdmin.id },
    });

    await prisma.$disconnect();
  });

  it('should find the first article by its ID', async () => {
    // Create mock article owner in DB
    await prisma.user.create({
      data: mockAdmin,
    });

    // Arrange
    const { ownerId, ...mockArticleWithoutOwnerId } = mockArticle;
    const newArticle = await prisma.article.create({
      data: {
        ...mockArticleWithoutOwnerId,
        ownerId: mockAdmin.id,
      },
    });

    // Act
    const foundArticle = await prisma.article.findFirst({
      where: {
        id: newArticle.id,
      },
    });

    // Assert
    expect(foundArticle).toBeDefined();
    expect(foundArticle.id).toEqual(newArticle.id);
  });
});
