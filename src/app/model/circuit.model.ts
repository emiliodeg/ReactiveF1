export interface Race {
  season: number;
  round: number;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: Date;
  time: string;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: GeoLocation;
}

export interface GeoLocation {
  lat: number;
  long: number;
  locality: string;
  country: string;
}
