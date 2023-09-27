import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsPanel,
  } from "@components/molecule/Tabs";
  import {
    ItemDescript,
    ItemImage,
    Itemlist,
  } from "@components/molecule/Itemlist";
  import React, { Fragment } from "react";
  import { pipe } from "utility/util";
  
  type TAlbumAttr = {
    [key: string]: string | number;
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
  
  async function getData() {
    return await fetch("https://jsonplaceholder.typicode.com/albums/1/photos", {
      method: "GET",
      cache: "no-cache",
    }).then((response) => response.json());
  }
  
  export default async function Item() {
    const data = await getData();
    const list = [
      { idx: 1, name: "첫번째 탭" },
      { idx: 2, name: "두번째 탭" },
      { idx: 3, name: "세번째 탭" },
      { idx: 4, name: "네번째 탭" },
      { idx: 5, name: "다섯번째 탭" },
    ];
  
    const filterItem = pipe(
      deleteKey("albumId"),
      deleteKey("thumbnailUrl"),
      under30,
      (data: TAlbums[]) => changeImage(data, 2)
    )(data);
  
    return (
      <Fragment>
        <Tabs as="section" defaultValue={1}>
          <TabsList className="mb-4">
            {list.map((item) => (
              <TabsTrigger
                className="py-[5px] px-[20px] rounded-none"
                key={item.name}
                value={item.idx}
              >
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsPanel value={1}>
            <Itemlist className="max-w-[1100px] justify-center grid grid-flow-dense gap-y-[30px] gap-x-[15px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filterItem?.map((item: TAlbums, idx: number) => (
                <ItemImage key={idx} item={item}>
                  <ItemDescript btnIcon={""} btnText={"구매하기"} deliveryText={"샛별배송"}></ItemDescript>
                </ItemImage>
              ))}
            </Itemlist>
          </TabsPanel>
          <TabsPanel value={2}>{"두번째 탭"}</TabsPanel>
          <TabsPanel value={3}>{"세번째 탭"}</TabsPanel>
          <TabsPanel value={4}>{"네번째 탭"}</TabsPanel>
          <TabsPanel value={5}>{"다섯번째 탭"}</TabsPanel>
        </Tabs>
      </Fragment>
    );
  }
  