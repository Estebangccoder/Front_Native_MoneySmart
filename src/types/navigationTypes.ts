import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export type RootStackParamList={
  Home:undefined;
  Login:undefined;
  Register:undefined;


}

export type HomeNavigation = NativeStackNavigationProp<RootStackParamList, 'Home'>

export type Login = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export type Register = NativeStackNavigationProp<RootStackParamList, 'Register'>;


