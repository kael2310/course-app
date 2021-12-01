import { Icon } from "../icon";

export type Value = 'string' | 'boolean' | 'number'

export interface ControlItem{
    value: number;
    label: string;
    icon?: Icon
}
