"use client";

import * as React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { ComboboxItem, FormComboboxProps } from "@/config/types/forms";

const FormComboBox = ({ form, name, items, size, act }: FormComboboxProps) => {
  const captalize = name.charAt(0).toUpperCase() + name.slice(1);
  const label = captalize.replaceAll("_", " ");
  const isDisabled = act === "View";
  const [open, setOpen] = React.useState(false);

  if (!items) {
    return null;
  }

  if (items) {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          // Find the label of the currently selected item for display in the button
          const selectedItem = field.value
            ? items.find((item: ComboboxItem) => item.value === field.value)
            : null;

          const popoverContentClassName = "w-[200px] p-0";
          const placeholder = "Select one option";

          return (
            <div className={`col-span-full md:col-span-${size} pb-4`}>
              <FormItem>
                <FormLabel>{label}</FormLabel>
                {/* <Popover open={open} onOpenChange={setOpen}> */}
                <Popover
                  open={isDisabled ? false : open}
                  onOpenChange={isDisabled ? undefined : setOpen}
                >
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={!isDisabled && open}
                        disabled={isDisabled}
                        className={cn(
                          "w-full justify-between font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {selectedItem ? selectedItem.label : placeholder}

                        {!isDisabled && (
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className={cn(popoverContentClassName)}>
                    <Command>
                      <CommandInput placeholder="Search..." />
                      <CommandEmpty>No item found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          {items.map((item: ComboboxItem) => (
                            <CommandItem
                              value={item.value}
                              key={item.value}
                              onSelect={(currentValue) => {
                                form.setValue(name, currentValue, {
                                  shouldValidate: true,
                                  shouldTouch: true,
                                  shouldDirty: true,
                                });
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  item.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {item.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            </div>
          );
        }}
      />
    );
  }
};

export default FormComboBox;
