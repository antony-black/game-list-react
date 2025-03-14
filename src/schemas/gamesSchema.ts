// export type TGames = {
//   games: IGame[],
// }

export interface IGame {
  category: string;
  price: string;
  inWishList: boolean;
  name: string;
  images: string[];
}

export type TGames = IGame[];


