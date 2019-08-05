export class Expense {
    private id: number;
    private name: string;
    private value: number;

    /**
     * Getter $value
     * @return {number}
     */
	public get $value(): number {
		return this.value;
	}

    /**
     * Setter $value
     * @param {number} value
     */
	public set $value(value: number) {
		this.value = value;
	}


    /**
     * Getter $id
     * @return {number}
     */
    public get $id(): number {
        return this.id;
    }

    /**
     * Setter $id
     * @param {number} value
     */
    public set $id(value: number) {
        this.id = value;
    }

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    constructor($id: number, $name: string, $value: number) {
        this.id = $id;
        this.name = $name;
        this.value = $value;
    }

    toString(): string{
        return this.id + this.name;
    }
}
