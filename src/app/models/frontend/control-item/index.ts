import { Icon } from "../icon";

export type Value = 'string' | 'boolean' | 'number'

export interface ControlItem{
    value: Value;
    label: string;
    icon?: Icon
}
