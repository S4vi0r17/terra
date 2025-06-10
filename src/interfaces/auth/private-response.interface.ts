export interface PrivateResponse {
  ok: boolean;
  message: string;
  user: User;
  userEmail: string;
  rawHeaders: string[];
  headers: Headers;
}

export interface Headers {
  'content-type': string;
  authorization: string;
  'user-agent': string;
  accept: string;
  'postman-token': string;
  host: string;
  'accept-encoding': string;
  connection: string;
  'content-length': string;
}

// export interface User {
interface User {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
}
