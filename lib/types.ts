export type Preferences = {
  focusIntervalDuration: string;
  shortBreakIntervalDuration: string;
  longBreakIntervalDuration: string;
  completionImage: string;
  sound: string;
  enableTimeOnMenuBar: boolean;
  giphyAPIKey: string;
};

export type IntervalType = "focus" | "short-break" | "long-break";

type Part = {
  startedAt: number;
  pausedAt?: number;
};

export type Interval = {
  parts: Part[];
  length: number;
  type: IntervalType;
};
