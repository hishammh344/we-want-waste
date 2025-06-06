import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faCheck, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

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
