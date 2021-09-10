import React from "react";
import "components/InterviewerListItem.scss";
import classnames from "classnames";

export default function InterviewerListItem(props) {

  // const interviewer = classnames("interviewers_item", {
  //   "day-list__item--id": props.selected,
  //   "day-list__item--name": props.name,
  //   "day-list__item--avatar": props.avatar,
  //   "day-list__item--selected": props.selected,
  // })

  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected === true,
  });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );

}