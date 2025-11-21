export interface Iplanresponse {
  Success: boolean;
  Message: string;
  Data:    IPlansData[];
  Errors: string[];
}

export interface IPlansData{
   
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
  
}
