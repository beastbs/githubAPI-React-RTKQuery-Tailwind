import { IUser } from "../../../interfaces";

export interface IDropdown {
  user: IUser;
  onClick: (username: string) => void;
}

export interface IDropdownList {
  users: IUser[] | undefined;
  isLoading: boolean;
  onClick: (username: string) => void;
}
