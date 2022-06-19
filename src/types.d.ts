export type Sub = {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
};

export type ApiSub = Array<{
  nick: string;
  profileUrl: string;
  month: number;
  description?: string;
}>;
