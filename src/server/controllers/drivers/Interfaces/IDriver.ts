export interface IDriver {
  company: string;
  city: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  status: string;
  creationDate?: Date;
}

export interface IFilter {
  filter?: number;
}
