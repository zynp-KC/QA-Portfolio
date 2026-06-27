import { APIRequestContext, expect } from '@playwright/test';
import { AuthCredentials, AuthResponse, Booking, BookingResponse } from '../models/booking';

export class ApiClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createToken(credentials: AuthCredentials): Promise<string> {
    const response = await this.request.post('/auth', {
      data: credentials,
    });

    expect(response.status()).toBe(200);

    const body: AuthResponse = await response.json();
    return body.token;
  }

  async createBooking(booking: Booking): Promise<BookingResponse> {
    const response = await this.request.post('/booking', {
      data: booking,
    });

    expect(response.status()).toBe(200);

    const body: BookingResponse = await response.json();
    return body;
  }

  async getBooking(id: number): Promise<Booking> {
    const response = await this.request.get(`/booking/${id}`);

    expect(response.status()).toBe(200);

    const body: Booking = await response.json();
    return body;
  }

  async updateBooking(id: number, booking: Booking, token: string): Promise<Booking> {
    const response = await this.request.put(`/booking/${id}`, {
      headers: {
        Cookie: `token=${token}`,
      },
      data: booking,
    });

    expect(response.status()).toBe(200);

    const body: Booking = await response.json();
    return body;
  }

  async deleteBooking(id: number, token: string): Promise<void> {
    const response = await this.request.delete(`/booking/${id}`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });

    expect(response.status()).toBe(201);
  }
}