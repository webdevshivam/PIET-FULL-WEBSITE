interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class AdminApiError extends Error {
  status: number;
  response?: any;

  constructor(message: string, status: number, response?: any) {
    super(message);
    this.name = 'AdminApiError';
    this.status = status;
    this.response = response;
  }
}

export const adminApi = {
  async request<T = any>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const token = localStorage.getItem('admin_token') || localStorage.getItem('adminToken');

      if (!token) {
        throw new AdminApiError('No authentication token found', 401);
      }

      const response = await fetch(endpoint, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          ...options.headers,
        },
        credentials: 'include',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new AdminApiError(
          data.message || `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          data
        );
      }

      return data;
    } catch (error) {
      if (error instanceof AdminApiError) {
        throw error;
      }

      // Network or other errors
      throw new AdminApiError(
        error instanceof Error ? error.message : 'Network error occurred',
        0
      );
    }
  },

  get<T = any>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  },

  post<T = any>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  put<T = any>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  delete<T = any>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  },
};

export { AdminApiError };