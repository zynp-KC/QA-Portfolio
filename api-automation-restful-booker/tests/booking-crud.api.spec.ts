import { test, expect } from '@playwright/test';
import { ApiClient } from '../src/client/api-client';
import { Booking, BookingResponse, AuthResponse, AuthCredentials } from '../src/models/booking';

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
            const response = await client.createBooking(newBooking);
            expect(response.status()).toBe(200);

            const created: BookingResponse = await response.json();
            expect(created.bookingid).toBeTruthy();
            expect(created.booking.firstname).toBe(newBooking.firstname);

            bookingId = created.bookingid;
        });

        await test.step('retrieve the created booking', async () => {
            const response = await client.getBooking(bookingId);
            expect(response.status()).toBe(200);

            const fetched: Booking = await response.json();
            expect(fetched.firstname).toBe(newBooking.firstname);
            expect(fetched.totalprice).toBe(newBooking.totalprice);
        });

        const credentials: AuthCredentials = {
            username: 'admin',
            password: 'password123'
        };
        const authResponse = await client.createToken(credentials);
        expect(authResponse.status()).toBe(200);
        const { token }: AuthResponse = await authResponse.json();

        await test.step('update the booking', async () => {
            const updatedBooking: Booking = {
                ...newBooking,
                totalprice: 500,
                additionalneeds: 'Breakfast and Dinner',
            };

            const response = await client.updateBooking(bookingId, updatedBooking, token);
            expect(response.status()).toBe(200);

            const updated: Booking = await response.json();
            expect(updated.totalprice).toBe(500);
            expect(updated.additionalneeds).toBe('Breakfast and Dinner');
        });

        await test.step('delete the booking', async () => {
            const response = await client.deleteBooking(bookingId, token);
            expect(response.status()).toBe(201);

            const getResponse = await client.getBooking(bookingId);
            expect(getResponse.status()).toBe(404);
        });
    });
});