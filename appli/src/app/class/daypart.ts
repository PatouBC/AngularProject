import { User } from './user';
import { Status } from './status';
import { Type } from './type';
import { Consult } from './consult';

export class Daypart {
    id: number;
    status: Status;
    type: Type;
    consults: Consult[];
    user: User;
}
