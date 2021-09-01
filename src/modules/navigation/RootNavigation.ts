import {NavigationContainerRef} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export function navigate(name: any, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export const useRootNavigation = () => ({navigationRef, navigate, goBack});
