export type AppTheme = Partial<{
  backgroundOpacity: number;
  backdropFilter: string;
  spacing: Partial<{
    baseUnit: number;
  }>;
  colors: Partial<{
    borderColor: string;
    focusColor: string;
    mutedColor: string;
    primaryBackground: string;
    secondaryBackground: string;
  }>;
}>;
