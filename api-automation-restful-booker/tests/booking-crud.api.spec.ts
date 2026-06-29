import { test, expect } from '@playwright/test';
import { ApiClient } from '../src/client/api-client';
import { Booking, AuthCredentials } from '../src/models/booking';

test.describe('Booking CRUD lifecycle', () => {
    test('should create, retrieve, update and delete a booking', async ({ request }) => {
        const client = new ApiClient(request);

        const newBooking: Booking = {
            firstname: 'Zeynep',
            lastname: 'Doe',
            totalprice: 250,
            depositpaid: true,
            bookingdates: {
                checkin: '2026-07-01',
                checkout: '2026-07-10'
            },
            additionalneeds: 'Breakfast'
        };

        let bookingId: number;

        await test.step('create a new booking', async () => {
            const created = await client.createBooking(newBooking);

            expect(created.bookingid).toBeTruthy();
            expect(created.booking.firstname).toBe(newBooking.firstname);

            bookingId = created.bookingid;
        });

        await test.step('retrieve the created booking', async () => {
            const fetched = await client.getBooking(bookingId);

            expect(fetched.firstname).toBe(newBooking.firstname);
            expect(fetched.totalprice).toBe(newBooking.totalprice);
        });

        const credentials: AuthCredentials = {
            username: 'admin',
            password: 'password123'
        };
        const token = await client.createToken(credentials);

        await test.step('update the booking', async () => {
            const updatedBooking: Booking = {
                ...newBooking,
                totalprice: 500,
                additionalneeds: 'Breakfast and Dinner',
            };

            const updated = await client.updateBooking(bookingId, updatedBooking, token);

            expect(updated.totalprice).toBe(500);
            expect(updated.additionalneeds).toBe('Breakfast and Dinner');
        });

        await test.step('delete the booking', async () => {
            await client.deleteBooking(bookingId, token);

            const response = await request.get(`/booking/${bookingId}`);
            expect(response.status()).toBe(404);
        });
    });
});