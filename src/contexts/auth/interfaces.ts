import { StateDataProps } from '@/store/auth';

export interface TokensProps {
  token: string;
  refreshToken: string;
}

export interface SignOutMessageProps {
  message?: string;
}

export interface CredentialProps {
  email: string;
  password: string;
}
export interface CodeVerificationProps {
  email: string;
  code: number;
}
export interface CreatePasswordProps extends CodeVerificationProps {
  password: string;
}

export interface ChangePasswordLoggedProps {
  oldPassword: string;
  password: string;
}
export interface UpdateProfileProps {
  first_name: string;
  firstName: string;
  lastName: string;
  birthdate: Date | string;
  phoneNumber: string;
  document: string;
}

export interface AuthContextData {
  // data: StateDataProps;

  // tokens: TokensProps;
  loading: boolean;

  signIn: (credentials: CredentialProps) => Promise<void>;

  signOut: (msg: SignOutMessageProps) => void;
  // codeVerification: (
  //   verificationData: CodeVerificationProps,
  // ) => Promise<boolean>;
  // updateProfile: (
  //   id: string,
  //   updateProfileData: UpdateProfileProps,
  // ) => Promise<boolean>;

  // createPassword: (createPasswordData: CreatePasswordProps) => Promise<void>;

  // forgotPassword: (email: string) => Promise<boolean>;
  changePasswordLogged: (
    changePasswordData: ChangePasswordLoggedProps,
  ) => Promise<boolean>;

  settingData: (dataUser: StateDataProps) => void;
}
