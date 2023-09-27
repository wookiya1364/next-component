const pipe = (...fns: Function[]) => {
  return function (arg: any) {
    return fns.reduce((acc, fn) => fn(acc), arg);
  };
};

function deleteKey(attr: string) {
  return function (arg: TAlbums[]): TAlbums[] {
    arg.map((item: TAlbumAttr) => delete item[attr]);
    return arg;
  };
}

function under30(item: TAlbums[]) {
  return item.filter((item) => item.id < 30);
}

function changeImage(data: TAlbums[], condition: number) {
  return data.filter((item) => {
    if (item.id % condition === 0) {
      item.url =
        "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/8241f01d-4fbe-49fb-b06f-1a1741385cad.jpg";
    } else {
      item.url =
        "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/68d842fc-9feb-4bb8-a1fd-baa0d244dc21.jpg";
    }
    return item;
  });
}

function targetInfo(data: TAlbums[], condition: number) {
  // return data.filter((item) => item.id === condition);
  return data.find((item) => item.id === condition);
}

export { pipe, deleteKey, under30, changeImage, targetInfo };
