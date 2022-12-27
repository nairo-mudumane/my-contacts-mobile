import type { IButtonProps as INativeBaseButtonProps } from "native-base";

export interface IButtonProps extends INativeBaseButtonProps {
  text?: string;
  color?: string;
}
