export type OrderColor = 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'cyan';


export interface OrderThing {
    id: number;
    name: string;
    color: OrderColor;
    order?: number;
}