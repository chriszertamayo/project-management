import React from "react";
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

type Props = {};

const Urgent = (props: Props) => {
  return <ReusablePriorityPage priority={Priority.Backlog} />;
};

export default Urgent;
