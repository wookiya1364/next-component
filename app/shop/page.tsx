import {
  ItemDescript,
  ItemImage,
  Itemlist,
} from "@components/molecule/Itemlist";
import React from "react";
import { changeImage, deleteKey, pipe, under30 } from "utility/util";
import { Row } from "@components/atom/row";
import Link from "next/link";
import { getData } from "utility/fetch";

export default async function Shop() {
  const data = await getData();
  const filterItem = pipe(
    deleteKey("albumId"),
    deleteKey("thumbnailUrl"),
    under30,
    (data: TAlbums[]) => changeImage(data, 2)
    )(data);
    
  return (
    <Row as="article">
      <Itemlist as="section" className="max-w-[1100px] justify-items-center justify-center grid grid-flow-dense gap-y-[30px] gap-x-[15px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterItem?.map((item: TAlbums, idx: number) => (
          <Link key={idx} href={`/goods/${item.id}`} scroll={false}>
            <ItemImage item={item}>
              <ItemDescript
                btnIcon={""}
                btnText={"구매하기"}
                deliveryText={"샛별배송"}
              ></ItemDescript>
            </ItemImage>
          </Link>
        ))}
      </Itemlist>
    </Row>
  );
}
