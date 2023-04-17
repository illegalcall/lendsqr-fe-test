export class APIService {
  constructor() {}

  async login(email: string, password: string) {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return { err: 'something went wrong' };
    }
  }

  async getUsers() {
    try {
      const res = await fetch('/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return { err: 'something went wrong' };
    }
  }

  async getUserDetails(id: string) {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return { err: 'something went wrong' };
    }
  }
}
