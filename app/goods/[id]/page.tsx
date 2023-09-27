import React from "react";
import { changeImage, pipe, targetInfo } from "utility/util";
import { ItemDescript, ItemImage, Itemlist } from "@components/molecule/Itemlist";
import { getData } from "utility/fetch";
import { Row } from "@components/atom/row";

interface TGoods {
  params: {
    id: string;
  };
}

export default async function GoodsID({ params }: TGoods) {
  console.log(params)
  const data = await getData();
  const filterItem: TAlbums = pipe(
    (data: TAlbums[]) => changeImage(data, 2),
    (data: TAlbums[]) => targetInfo(data, parseInt(params.id)),
    )(
    data
  );

  return (
    <Row as="main">
      <Itemlist className="max-w-[1100px] justify-center">
          <ItemImage item={filterItem}>
            <ItemDescript
              btnIcon={""}
              btnText={"구매하기"}
              deliveryText={"샛별배송"}
            ></ItemDescript>
          </ItemImage>
      </Itemlist>
    </Row>
  );
}
