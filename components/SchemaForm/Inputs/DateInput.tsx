import React, { useState, FC } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

// Custom components
import { Record } from "@/components/SchemaForm/SchemaForm";
import ErrorMessage from "../ErrorMessage";

// Types
import { FieldValidation } from "@/@types/Schema";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format, isValid, parse } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

type DateInputProps = {
  register: UseFormRegister<Record>;
  setValue: UseFormSetValue<Record>;
  label: string;
  dbName: string;
  error?: any;
  validation?: FieldValidation;
};

const DateInput: FC<DateInputProps> = (props) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined); // keep the selected date in sync
  const [inputValue, setInputValue] = useState(""); // keep the input value in sync
  const [month, setMonth] = useState(new Date()); // keep the month in sync with the calendar

  const { register, label, dbName, validation, setValue } = props;

  const formRegister = register(
    dbName,
    validation && {
      ...validation,
    }
  );

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
      setValue(dbName, "");
    } else {
      setSelectedDate(date);
      setValue(dbName, date.toISOString());
      setMonth(date);
      setInputValue(format(date, "dd.MM.yyyy"));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // keep the input value in sync

    const parsedDate = parse(e.target.value, "dd.MM.yyyy", new Date());

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
      setValue(dbName, parsedDate.toISOString());
    } else {
      setSelectedDate(undefined);
    }
  };

  return (
    <div className="flex justify-start gap-3">
      <label className="w-20">{label}</label>
      {/* {error && <ErrorMessage error={error} validation={validation} />} */}
      <Popover>
        <PopoverTrigger asChild>
          <input
            style={{ fontSize: "inherit" }}
            className="bg-slate-600"
            type="text"
            value={inputValue}
            placeholder="dd.MM.yyyy"
            onChange={handleInputChange}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-slate-600" align="start">
          <Calendar
            month={month}
            onMonthChange={setMonth}
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateInput;
