export const MOCK_API_BASE_URL =
  'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1';

export const NODE_ENV = process.env.NODE_ENV;

export const JWT_SECRET =
  NODE_ENV === 'development' ? 'mysecret' : process.env.JWT_SECRET;
export const ADMIN_EMAIL =
  NODE_ENV === 'development' ? 'admin@lendsqr.com' : process.env.ADMIN_EMAIL;
export const ADMIN_PASSWORD =
  NODE_ENV === 'development' ? 'password1234' : process.env.PASSWORD;
