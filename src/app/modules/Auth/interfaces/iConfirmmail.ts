export interface ConfirmEmailRequest {
  email: string;
  token: string;
}

export interface ConfirmEmailData {
  accessToken: string;
  refreshToken: string;
  userId: string;
  email: string;
}

export interface ConfirmEmailResponse {
  success: boolean;
  message: string;
  data: ConfirmEmailData | null;
  errors: string[] | null;
}
