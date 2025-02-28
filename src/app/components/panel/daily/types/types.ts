export interface DailyItem {
  avod_status: string;
  content_rating: string;
  cropped_img: string;
  distributed_air_time: string;
  distributed_air_time_sequence: number;
  distributed_air_times: string[];
  genres: string[];
  highlight_video: string | null;
  id: number;
  images: image[];
  img: string;
  is_adult: boolean;
  is_avod: boolean;
  is_dubbed: boolean;
  is_episode_existed: boolean;
  is_expired: boolean;
  is_laftel_only: boolean;
  is_uncensored: boolean;
  is_viewing: boolean;
  latest_episode_created: string;
  latest_published_datetime: string;
  medium: string;
  name: string;
  rating: number;
  rating_type: string;
}
export interface image {
  option_name: string;
  crop_ratio: string;
  img_url: string;
}
