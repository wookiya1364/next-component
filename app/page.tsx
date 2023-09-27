import { Row } from "@components/atom/row";
import Shop from "./shop/page";
import { Column } from "@components/atom/column";

export default async function Home() {
  return (
    <Column as="main">
      <Shop></Shop>
    </Column>
  );
}
