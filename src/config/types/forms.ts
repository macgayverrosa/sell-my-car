import { UseFormReturn } from "react-hook-form";

export interface FormFieldsProps {
  fields: Array<{
    TOOL: string;
    NAME: string;
    TYPE?: string;
    ITEMS?: Array<{ value: string; label: string }>;
    SIZE: string;
    TABLE?: boolean;
  }>;
}

export interface FormProps extends FormFieldsProps {
  tool: any;
  itemSchema: any;
  act: string;
  funcSubmit: any;
  item: any;
  submitting?: boolean;
  isLoading: boolean;
}

export interface FormElementsProps {
  form: UseFormReturn<any>; // Or a more specific form type if available
  name: string;
  size: string | number;
  act?: string;
}

export interface FormComboboxProps extends FormElementsProps {
  items: ComboboxItem[] | null | undefined; // Allow null or undefined for conditional rendering
  label?: string; // Optional custom label
  placeholder?: string; // Optional placeholder text for the combobox button
  popoverContentClassName?: string; // Optional custom class for PopoverContent
}

export interface ComboboxItem {
  value: string; // Or number, boolean, etc., depending on your data
  label: string;
}

export interface FormInputProps extends FormElementsProps {
  type: string | undefined;
}

export interface FormFooterProps {
  act: string;
  submitting: any;
  tool: any;
}
