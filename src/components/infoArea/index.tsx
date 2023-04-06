import React from "react";
import * as C from "./style";
import { formatCurrentMonth } from "../../helpers/dataFilter";
import ResumeItem from "../resumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.container>
      <C.monthArea>
        <C.monthArrow onClick={handlePrevMonth}>⬅</C.monthArrow>
        <C.monthTitle>{formatCurrentMonth(currentMonth)}</C.monthTitle>
        <C.monthArrow onClick={handleNextMonth}>➡</C.monthArrow>
      </C.monthArea>
      <C.resumeArea>
        <ResumeItem title={"Despesas"} value={income} />
        <ResumeItem title={"Receitas"} value={expense} />
        <ResumeItem
          title={"Balanço"}
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.resumeArea>
    </C.container>
  );
};

export default InfoArea;
