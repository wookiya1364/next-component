import { Column } from "@components/atom/column";
import Modal from "@components/atom/modal";
import { Row } from "@components/atom/row";
import { ItemImage } from "@components/molecule/Itemlist";
import React from "react";
import { getData } from "utility/fetch";
import { changeImage, pipe, targetInfo } from "utility/util";

interface TGoods {
  params: {
    id: string;
  };
}

export default async function GoodsModal({ params }: TGoods) {
  const data:TAlbums[] = await getData();
  const filterItem: TAlbums = pipe(
    (data: TAlbums[]) => changeImage(data, 2),
    (data: TAlbums[]) => targetInfo(data, parseInt(params.id)),
    )(
    data
  );

  // const filterItem = data.find((item) => item.id === parseInt(params.id)) as TAlbums;
  // const filterItem = data[3];

  return (
    <Modal>
      <Column className="w-full overflow-auto bg-[rgb(var(--background-reverse-rgb))]">
        <p>디테일해요</p>
        <ItemImage item={filterItem}></ItemImage>
        <ItemImage item={filterItem}></ItemImage>
        <ItemImage item={filterItem}></ItemImage>
        <ItemImage item={filterItem}></ItemImage>
        <ItemImage item={filterItem}></ItemImage>
      </Column>
    </Modal>
  );
}
