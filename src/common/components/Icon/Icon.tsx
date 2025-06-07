import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  icon: IconDefinition;
} & FontAwesomeIconProps;

const Icon = ({ icon, ...restProps }: Props) => {
  return (
    <FontAwesomeIcon
      {...{
        icon,
        ...restProps,
      }}
    />
  );
};

export default Icon;
