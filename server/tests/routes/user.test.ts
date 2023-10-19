import request from 'supertest';
import createApp from '@/koa';

const app = createApp()

describe('User Route', () => {
  it('should return a successful response', async () => {
    const response = await request(app.callback()).get('/user');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      username: 'exampleUser',
      password: 'examplePassword',
    });
  });
});
