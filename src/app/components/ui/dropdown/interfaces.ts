import { IUser } from "../../../interfaces";

export interface IDropdownItem {
  user: IUser;
  onClick: (username: string) => void;
}

export interface IDropdown {
  users: IUser[] | undefined;
  isLoading: boolean;
  onClick: (username: string) => void;
}
