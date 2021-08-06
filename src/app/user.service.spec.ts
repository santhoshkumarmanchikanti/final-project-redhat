import { UserService } from './user.service';
import {User} from './user';

describe('User.Service', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new UserService()).toBeTruthy();
  });
});
