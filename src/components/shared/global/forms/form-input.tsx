"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormInputProps } from "@/config/types/forms";

const FormInput = ({ form, name, type, size, act }: FormInputProps) => {
  const captalize = name.charAt(0).toUpperCase() + name.slice(1);
  const label = captalize.replaceAll("_", " ");
  const placeHolder = `Please type the ${label}...`;
  const isDisabled = act === "View";

  // // --- DEBUG LINE: Check received size and generated class ---
  // const calculatedClassName = `col-span-full md:col-span-${size} pb-4`;

  // console.log(
  //   `FormInput (Field: '${name}') - Received size: '${size}', Generated class: '${calculatedClassName}'`
  // );
  // // --- END DEBUG LINE ---


  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className={`col-span-full md:col-span-${size} pb-4`}>
          <FormItem className="pb-4">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeHolder}
                type={type}
                disabled={isDisabled}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>
      )}
    />
  );
};

export default FormInput;
