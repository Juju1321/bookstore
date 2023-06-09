export enum ButtonType {
  Primary = "Primary",
  White = "White",
  WhiteIcon = "WhiteIcon",
  PrimaryIcon = "PrimaryIcon",
}

export type CardType = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
  error?: string;
  authors?: string;
  publisher?: string;
  isbn10?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  pdf?: {
    string: string;
  };
  quantity?: number;
};

export enum CardTypes {
  Default,
  Search,
  Cart,
  Favorite,
}

export type CardProps = {
  card: CardType;
  type: CardTypes;
  countPrice?: number | string;
};

export type CardListType = CardType[];

export type UserInfo = {
  name?: string | null;
  email: string | null;
  token: string | null;
  id: string | null;
};
