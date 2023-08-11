import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

export interface IData {
  name: string; // é um nome
  uv: number; // é a quantidade
  pv: number; // é a porcentagem
  fill: string; // é a cor
}

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

export default function Chart({data}: {data: IData[]}) {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        label={{ position: "insideStart", fill: "#fff" }}
        background
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}