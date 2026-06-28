import { test, expect } from '@playwright/test';
import { ApiClient } from '../src/client/api-client';
import { AuthCredentials } from '../src/models/booking';

test.describe('Authentication - /auth', () => {
    test('should return a token when valid credentials are provided', async ({ request }) => {
        const client = new ApiClient(request);

        const credentials: AuthCredentials = {
            username: 'admin',
            password: 'password123',
        };

        const token = await client.createToken(credentials);

        expect(token).toBeTruthy();
        expect(typeof token).toBe('string');
    });

    test('should NOT return a token when invalid credentials are provided', async ({ request }) => {
        const response  = await request.post('/auth', {
            data: {
                username: 'admin',
                password: 'wrongpassword',
            },
        });

        // BUG: Restful Booker returns 200 OK for invalid credentials instead of the
        // correct 401 Unauthorized
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body).not.toHaveProperty('token');
        expect(body).toHaveProperty('reason', 'Bad credentials');
    
    });
});