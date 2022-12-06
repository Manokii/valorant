// Generated by https://quicktype.io

export interface PregameResponse {
  ID: string;
  Version: number;
  Teams: Team[];
  AllyTeam: null;
  EnemyTeam: null;
  ObserverSubjects: string[];
  MatchCoaches: string[];
  EnemyTeamSize: number;
  EnemyTeamLockCount: number;
  PregameState: string;
  LastUpdated: string;
  MapID: string;
  MapSelectPool: string[];
  BannedMapIDs: string[];
  CastedVotes: CastedVotes;
  MapSelectSteps: string[];
  MapSelectStep: number;
  Team1: string;
  GamePodID: string;
  Mode: string;
  VoiceSessionID: string;
  MUCName: string;
  QueueID: string;
  ProvisioningFlowID: string;
  IsRanked: boolean;
  PhaseTimeRemainingNS: number;
  StepTimeRemainingNS: number;
  altModesFlagADA: boolean;
  TournamentMetadata: null;
  RosterMetadata: null;
}

export interface CastedVotes {}

export interface Team {
  TeamID: string;
  Players: Player[];
}

export interface Player {
  Subject: string;
  CharacterID: string;
  CharacterSelectionState: string;
  PregamePlayerState: string;
  CompetitiveTier: number;
  PlayerIdentity: PlayerIdentity;
  SeasonalBadgeInfo: SeasonalBadgeInfo;
  IsCaptain: boolean;
}

export interface PlayerIdentity {
  Subject: string;
  PlayerCardID: string;
  PlayerTitleID: string;
  AccountLevel: number;
  PreferredLevelBorderID: string;
  Incognito: boolean;
  HideAccountLevel: boolean;
}

export interface SeasonalBadgeInfo {
  SeasonID: string;
  NumberOfWins: number;
  WinsByTier: null;
  Rank: number;
  LeaderboardRank: number;
}
