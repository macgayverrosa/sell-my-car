import { z } from "zod";
import React from "react";
import FormInput from "./form-input";
import FormFooter from "./form-footer";
import { useForm } from "react-hook-form";
import FormComboBox from "./form-combobox";
import { Form } from "@/components/ui/form";
import FormDatePicker from "./form-datapicker";
import { FormProps } from "@/config/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import IsLoading from "@/components/shared/animations/is-loading";

export const CRUDForm = (props: FormProps) => {
  type ItemSchema = z.infer<typeof props.itemSchema>;
  const form = useForm<ItemSchema>({
    resolver: zodResolver(props.itemSchema),
    defaultValues: props.item,
  });

  if (props.isLoading || !props.item || props.fields.length === 0) {
    return <IsLoading />;
  }

  const formFields = props.fields.map(function (val, index) {
    switch (val.TOOL) {
      case "input":
        return (
          <FormInput
            key={index}
            name={val.NAME}
            form={form}
            act={props.act}
            type={val.TYPE}
            size={val.SIZE}
          />
        );
      case "combobox":
        return (
          <FormComboBox
            key={index}
            name={val.NAME}
            form={form}
            items={val.ITEMS}
            size={val.SIZE}
            act={props.act}
          />
        );
      case "date":
        return (
          <FormDatePicker
            key={index}
            name={val.NAME}
            form={form}
            act={props.act}
            size={val.SIZE}
          />
        );
      default:
        return null;
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(props.funcSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {formFields}
        </div>
        <FormFooter
          act={props.act}
          tool={props.tool}
          submitting={props.submitting}
        />
      </form>
    </Form>
  );
};
