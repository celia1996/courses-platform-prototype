import React from "react";
import { ClassItem } from "../api/schedule";
import {
  formatDatesDetailed,
  formatPriceDetailed,
  formatTimes,
} from "../utils/formatters";
import "./CourseTile.css";

interface Props {
  item: ClassItem;
  selectedId: number | null;
  onSelect: (id: number) => void;
}

export const CourseTile: React.FC<Props> = ({ item, selectedId, onSelect }) => {
  const isSelected = item.id === selectedId;
  const fullPrice = formatPriceDetailed(
    item.pricing.amount,
    item.pricing.currency,
    item.pricing.valid_until
  );
  const [amountPart, untilPart] = fullPrice.split(" Until ");
  return (
    <label
      role="radio"
      tabIndex={0}
      aria-checked={isSelected}
      htmlFor={`class-${item.id}`}
      className={`course-card${isSelected ? " selected" : ""}`}
      onClick={() => onSelect(item.id)}
    >
      <div className="course-card__header">
        <div className="radio-wrapper">
          <input
            type="radio"
            id={`class-${item.id}`}
            name="class"
            checked={isSelected}
            onChange={() => onSelect(item.id)}
          />
        </div>
        <div className="text-heading-small text-primary-30">Virtual Course</div>
      </div>
      <div className="course-card__body">
        <div className="course-card__left">
          <div className="text-title-small-bold text-neutral-0">
            {formatDatesDetailed(item.dates, item.location.timezone)}
          </div>
          <div className="text-title-small-regular text-neutral-0">
            {formatTimes(item.dates, item.location.timezone)}
          </div>
          <div className="text-body-medium-regular text-neutral-0">
            {item.location.timezone.replace("_", " ")}
          </div>
          <div className="course-card__price">
            <span className="text-body-medium-bold text-neutral-0">
              {amountPart}
            </span>
            <span className="text-body-medium-regular text-neutral-0">
              {" Until " + untilPart}
            </span>
          </div>
        </div>
        <div className="course-card__right">
          <img
            src={item.instructors[0].portrait_image}
            alt={`Instructor ${item.instructors[0].first_name} ${item.instructors[0].last_name}`}
            className="course-card__img"
          />
          <div className="text-body-medium-regular text-neutral-0">
            Instructor:
          </div>
          <div className="text-body-medium-regular text-neutral-0">
            {item.instructors[0].first_name} {item.instructors[0].last_name}
          </div>
        </div>
      </div>
    </label>
  );
};
