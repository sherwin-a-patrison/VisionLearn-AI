
export enum AppScreen {
  WELCOME = 'welcome',
  ONBOARDING = 'onboarding',
  TUTOR = 'tutor',
}

export enum VisualCapability {
  LOW_VISION = 'Low Vision',
  FULLY_BLIND = 'Fully Blind',
  NOT_SET = 'Not Set',
}

export interface UserProfile {
  name: string;
  subject: string;
  visualCapability: VisualCapability;
}

export interface AccessibilitySettings {
  voiceSpeed: number; // 0.5 to 2
  voicePitch: number; // 0 to 2
  hapticIntensity: number; // 0 to 1
}

export interface ConversationMessage {
  sender: 'user' | 'ai';
  text: string;
}

export interface AppState {
  screen: AppScreen;
  profile: UserProfile;
  settings: AccessibilitySettings;
  conversation: ConversationMessage[];
  isInitialized: boolean;
}
