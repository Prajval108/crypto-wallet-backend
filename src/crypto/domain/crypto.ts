import { User } from '../../users/domain/user';

export class Crypto {
  id: number | string;
  userId: number | string;
  accountNumber: string;
  publicKey: string;
  recoveryPhrase: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}