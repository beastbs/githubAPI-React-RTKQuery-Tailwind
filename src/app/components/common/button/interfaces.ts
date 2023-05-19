export interface IButton {
  children: React.ReactNode;
  classes: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IButtonBack{
	classes: string;
	onGoBack: () => void;
}
