import { Platform } from 'react-native';
import { MapComponent } from './AppleMapView';
import { MapKitComponent } from './MapKitView';

export const PlatformMap = Platform.select({
    ios: MapComponent,
    android: MapKitComponent,
});