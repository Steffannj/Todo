import { Task } from './task';
import { Request } from './request';

export class User {
  static idCounter = 0;
  id: number;
  email: string;
  username: string;
  password: string;
  listOfTasks: Task[];
  listOfPendingRequests: Request[];

  constructor(username: string, password: string){
    this.id = User.idCounter++;
    this.username = username;
    this.password = password;
  }
}
