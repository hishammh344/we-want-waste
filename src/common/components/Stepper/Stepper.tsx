import React from "react";
import { styles } from "./styles";
import steps from "./data.json";
import Icon from "../Icon";
import {
  faCalendar,
  faCheck,
  faCreditCardAlt,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

const Stepper = () => {
  return (
    <div className="overflow-x-auto">
      <div className={styles.stepperContainer}>
        {steps.map((step, index) => {
          const currentIndex = index + 1;
          const isLast = index === steps.length - 1;
          return (
            <div className={styles.stepperItem} key={currentIndex}>
              <div className="z-10">
                <StepperIcon
                  title={step.title}
                  status={step.isCompleted}
                  isCurrent={step.title === "Permit Check"}
                />
                <StepperSubTitle index={currentIndex} />
                <StepperTitle title={step.title} />
                <StepperStatus status={step.isCompleted} />
              </div>
              {!isLast && <StepperLine />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StepperIcon = ({
  title,
  status,
  isCurrent,
}: {
  title: string;
  status: boolean;
  isCurrent: boolean;
}) => {
  return (
    <div className="relative">
      <Icon
        icon={
          title === "Postcode"
            ? faCheck
            : title === "Waste Type"
            ? faCheck
            : title === "Select Skip"
            ? faCheck
            : title === "Permit Check"
            ? faShield
            : title === "Choose Date"
            ? faCalendar
            : faCreditCardAlt
        }
        className={`${styles.stepperIcon} ${
          status ? styles.stepperIconCompleted : styles.stepperIconPending
        }`}
      />
      {isCurrent && <div className={styles.stepperIconSelector}></div>}
    </div>
  );
};

const StepperSubTitle = ({ index }: { index: number }) => {
  return <p className={styles.stepperSubTitle}>Step {index}</p>;
};

const StepperTitle = ({ title }: { title: string }) => {
  return <h4 className={styles.stepperTitle}>{title}</h4>;
};

const StepperStatus = ({ status }: { status: boolean }) => {
  return (
    <div
      className={`${styles.stepperStatus} ${
        status ? styles.stepperCompleted : styles.stepperPending
      }`}
    >
      {status ? "Completed" : "Pending"}
    </div>
  );
};

const StepperLine = () => {
  return <div className={styles.stepperLine}></div>;
};

export default Stepper;
