export type Sub = {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
};

export type ApiSub = Array<{
  nick: string;
  profileUrl: string;
  months: number;
  description?: string;
}>;

export type AppState = {
  subs: Array<Sub>;
  subsCounter: number;
};
