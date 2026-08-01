import { test, expect } from '@playwright/test';
import { ApiClient } from '../src/client/api-client';

test.describe('Health Check - /ping', () => {
    test('GET /ping should return 201 indicating the API is up', async ({ request }) => {
        const client = new ApiClient(request);
        const response = await client.ping();

        // Note: /ping returns 201 (not the conventional 200/204) a known Restful-Booker quirk
        expect(response.status()).toBe(201);
    });
});