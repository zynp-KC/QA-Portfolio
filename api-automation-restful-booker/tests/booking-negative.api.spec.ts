import { test, expect } from '@playwright/test';

test.describe('Booking negative scenarios', () => {
    test('GET /booking/:id with a non-existent ID should return 404', async ({ request }) => {
        const nonExistentId = 99999999;

        const response = await request.get(`/booking/${nonExistentId}`);

        expect(response.status()).toBe(404);
    });

    test('DELETE /booking/:id without a token should be rejected', async ({ request }) => {
        const createResponse = await request.post('/booking', {
            data: {
                firstname: 'Temp',
                lastname: 'User',
                totalprice: 100,
                depositpaid: false,
                bookingdates: { checkin: '2026-08-01', checkout: '2026-08-05' },
                additionalneeds: 'None',
            },
        });
        expect(createResponse.status()).toBe(200);
        const created = await createResponse.json();
        const bookingId = created.bookingid;
        
        const deleteResponse = await request.delete(`/booking/${bookingId}`);

        // A protected endpoint must reject unauthorized deletion
        // Restful-booker correctly returns 403 Forbidden here
        expect(deleteResponse.status()).toBe(403);
    });

    test('POST /booking with missing required fields should be rejected', async ({ request }) => {
        // Intentionally untyped + incomplete: we bypass the booking interface on
        // purpose to test how the API handles missing required fields at runtime
        const incompletePayload = {
            totalprice: 150,
            depositpaid: true,
        };

        const response = await request.post('/booking', {
            data: incompletePayload,
        });

        // BUG: A well-behaved API should return 400 Bad Request for invalid input
        // Restful-booker instead returns 500 Internal Server Error it crashes on
        // missing fields rather than validating them We assert the ACTUAL behaviour
        expect(response.status()).toBe(500);
    });
});