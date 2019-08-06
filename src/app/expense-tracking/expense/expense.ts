export interface ExpenseAttrs{
    id: number;
    description: string;
    amountSpent: number;
    category: string;
}

export class Expense {
    id: number;
    description: string;
    amountSpent: number;
    category: string;

    // constructor($id: number, $name: string, $value: number) {
    //     this.id = $id;
    //     this.name = $name;
    //     this.value = $value;
    // }

    constructor(attrs: Partial<ExpenseAttrs> = {})
    {
        this.id = attrs.id;
        this.description = attrs.description;
        this.amountSpent = attrs.amountSpent;
        this.category = attrs.category;
    }

    toString(): string{
        return this.id + ". " + this.description + " - " + this.amountSpent + "PLN";
    }
}
