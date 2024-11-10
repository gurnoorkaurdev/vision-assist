import { Platform } from 'react-native';
import { MapComponent } from './AppleMapView';
import { MapKitComponent } from './AndroidMapView';

export const PlatformMap = Platform.select({
    ios: AppleMapComponent,
    android: AndroidMapComponent,
});