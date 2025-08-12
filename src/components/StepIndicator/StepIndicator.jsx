import styles from "./StepIndicator.module.scss";
import clsx from "clsx";

const StepIndicator = ({ currentStep }) => {
  const steps = ["booking", "payment", "completed"];
  const currentIndex = steps.indexOf(currentStep);

  return (
    <div className={styles.stepContainer}>
      {steps.map((step, index) => {
        const isCompleted = index <= currentIndex;
        const isLast = index === steps.length - 1;

        return (
          <div key={step} className={styles.stepWrapper}>
            <div
              className={clsx(styles.step, {
                [styles.completed]: isCompleted,
                [styles.upcoming]: !isCompleted,
              })}
            >
              {isCompleted ? <span className={styles.checkmark}>✓</span> : index + 1}
            </div>
            {!isLast && <div className={styles.line} />}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
