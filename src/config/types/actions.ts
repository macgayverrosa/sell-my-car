import { FormFieldsProps } from "./forms";

interface ActionsProps extends FormFieldsProps {
  iniValue: any;
  itemSchema: any;
  setValues: any;
}

export interface ActionsAddProps extends ActionsProps{
  onSuccess?: () => void;
}

export interface ActionsViewProps extends ActionsProps {
  id: string | number;
}

export interface ActionsEditProps extends ActionsProps {
  id: string | number;
}

export interface ActionsDeleteProps {
  itemName: string;
  id: string;
  onSuccess?: () => void;
}