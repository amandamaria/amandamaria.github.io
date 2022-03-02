export interface SearchObj {
    searchField: string;
    searchValue: number | string | boolean | null;
}
export declare function getFieldReferences(fieldName: string, value: {} | number | string | boolean | null): SearchObj[];
export declare function objectFlatten(tree: {}): SearchObj[];
