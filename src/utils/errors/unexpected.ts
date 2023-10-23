import { AppError } from './appError';

export class UnexpectedError extends AppError {
  constructor() {
    super('Algo de errado aconteceu, tente novamente em breve.');
    this.name = 'UnexpectedError';
  }
}
