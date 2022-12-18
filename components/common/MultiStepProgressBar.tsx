import React from "react";
// import "./MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";
interface IPropType {
  page: String;
  onPageNumberClick:(number:string) => void;
}
const MultiStepProgressBar = ({ page, onPageNumberClick }: IPropType) => {
  var stepPercentage = 0;
  if (page === "pageone") {
    stepPercentage = 16;
  } else if (page === "pagetwo") {
    stepPercentage = 49.5;
  } else if (page === "pagethree") {
    stepPercentage = 82.5;
  } else if (page === "pagefour") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar  percent={stepPercentage}>
      <Step>
        {({
          accomplished,
          index,
        }: {
          accomplished: string | null;
          index: number;
        }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("1")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({
          accomplished,
          index,
        }: {
          accomplished: string | null;
          index: number;
        }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({
          accomplished,
          index,
        }: {
          accomplished: string | null;
          index: number;
        }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("3")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({
          accomplished,
          index,
        }: {
          accomplished: string | null;
          index: number;
        }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
