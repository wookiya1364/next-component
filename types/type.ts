type TContainer =
  | "div"
  | "section"
  | "main"
  | "article"
  | "header"
  | "footer"
  | "aside"
  | "nav";
type TLabel = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
type TAlbums = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};
type TAlbumAttr = {
  [key: string]: string | number;
};
