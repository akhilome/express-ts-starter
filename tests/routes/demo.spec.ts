import request from 'supertest';
import app from '../../src/app';

describe('GET /demo', () => {
  it('should respond with a 200', async () => {
    const response = await request(app).get('/demo');
    const responseBody = response.body as Record<string, unknown>;

    expect(response.status).toEqual(200);
    expect(responseBody.success).toEqual(true);
  });
});
