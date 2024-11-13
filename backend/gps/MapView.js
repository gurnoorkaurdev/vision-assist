import { Platform } from 'react-native';
import { AppleMapComponent } from './AppleMapView';
import { AndroidMapComponent } from './AndroidMapView';

export const PlatformMap = Platform.select({
    ios: AppleMapComponent,
    android: AndroidMapComponent,
});