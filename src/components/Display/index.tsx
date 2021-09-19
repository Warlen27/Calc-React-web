import React from "react";

import { DisplayLayout } from "./styles";

type Props = {
  value: string;
};

export default function Display({ value }: Props) {
  return <DisplayLayout>{value}</DisplayLayout>;
}
