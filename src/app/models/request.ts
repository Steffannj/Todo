import { User } from './user';

export class Request{
  id: number;
  description: string;
  createdAt: Date;
  sender: User;
}
