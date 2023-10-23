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

export type SessionProps = {
  refreshToken: string;
  token: string;
  user: UserProps;
};
