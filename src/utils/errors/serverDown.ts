import { AppError } from './appError';

export class ServerDownError extends AppError {
  constructor() {
    super(
      'Nossos servidores estão passando por problemas, tente novamente em breve',
    );

    this.name = 'ServerDownError';
  }
}
