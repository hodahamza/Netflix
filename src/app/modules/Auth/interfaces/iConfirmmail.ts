export interface ConfirmEmailRequest {
  email: string;
  token: string;
}

export interface ConfirmEmailData {
  AccessToken: string;
  RefreshToken: string;
  UserId: string;
  Email: string;
}

export interface ConfirmEmailResponse {
  Success: boolean;
  Message: string;
  Data: ConfirmEmailData | null;
  Errors: string[] | null;
}
