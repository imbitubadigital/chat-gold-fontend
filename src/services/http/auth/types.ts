export type RolesTypes = 'COMPANY' | 'ADMIN' | 'CLIENT';

export type RoleProps = {
  id: string;
  value: string;
  label: string;
  type: string;
};

export type UserProps = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: RoleProps[];
  createdAt: string;
  updatedAt: string;
};

export type CredentialsProps = {
  email: string;
  password: string;
};
export type CreateAccountsProps = {
  firstName: string;
  lastName: string;
  email: string;
};
export type ResponseCreateAccountsProps = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type SessionProps = {
  refreshToken: string;
  token: string;
  user: UserProps;
};

export type CodeValidationProps = {
  code: number;
  email: string;
};

export type CreatePasswordProps = {
  code: number;
  email: string;
  password: string;
};

export interface ChangePasswordRequestProps {
  password: string;
  passwordConfirmation: string;
}
