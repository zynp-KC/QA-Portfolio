import { APIRequestContext, APIResponse } from '@playwright/test';
import { AuthCredentials, Booking } from '../models/booking';

export class ApiClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  ping(): Promise<APIResponse> {
    return this.request.get('/ping');
  }

  createToken(credentials: AuthCredentials): Promise<APIResponse> {
    return this.request.post('/auth', { data: credentials });
  }

  createBooking(booking: Booking): Promise<APIResponse> {
    return this.request.post('/booking', { data: booking });
  }

  getBooking(id: number): Promise<APIResponse> {
    return this.request.get(`/booking/${id}`);
  }

  updateBooking(id: number, booking: Booking, token: string): Promise<APIResponse> {
    return this.request.put(`/booking/${id}`, {
      headers: { Cookie: `token=${token}` },
      data: booking,
    });
  }

  deleteBooking(id: number, token: string): Promise<APIResponse> {
    return this.request.delete(`/booking/${id}`, {
      headers: { Cookie: `token=${token}` },
    });
  }
}