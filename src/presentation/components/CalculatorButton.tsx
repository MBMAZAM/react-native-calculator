import {Pressable, Text} from 'react-native';
import { stylesGlobal, colorGlobal } from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
}

export const CalculatorButton = ({
  label, 
  color = colorGlobal.darkGray,
  doubleSize = false,
}: Props) => {
  return (
    <Pressable style={ ({pressed})=>({
      ...stylesGlobal.button,
      backgroundColor: color,
      width: (doubleSize) ? 180 : 80,
      opacity: (pressed) ? 0.8 : 1,
    })}>
      <Text style={stylesGlobal.buttonText}>{label}</Text>
    </Pressable>
  );
};
