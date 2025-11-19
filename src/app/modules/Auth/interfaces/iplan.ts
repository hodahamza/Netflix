export interface Iplan {
  Success: boolean;
  Message: string;
  Data: {
    Id: string;
    CurrentState: number;
    Name: string;
    PricePerMonth: number;
    VideoAndSoundQuality: string;
    Resolution: string;
    SupportedDevices: string;
    MaxSimultaneousDevices: number;
    MaxDownloadDevices: number;
    SpatialAudio: string;
  }[];
  Errors: string[];
}
