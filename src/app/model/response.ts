export interface ApiResponse<T> {
  MRData: T;
  limit: number;
  offset: number;
  total: number;
}
