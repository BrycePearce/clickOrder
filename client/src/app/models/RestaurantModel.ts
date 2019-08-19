// tslint:disable: variable-name
export class Restaurant {
    name: string;
    address: string;
    groupedMenu: GroupedMenu;
    categories: Array<Category>;
}

export class GroupedMenu {
    [key: string]: Selection[];
}

export class Selection {
    name: string;
    description: string;
    category: string;
    image: string;
    price: string;
    order: number;
    customization: CustomizationOptions;
    comboSelections: ComboSelection;
    minSelections: number;
    maxSelections: number;
    _id: string;
    quantity?: number;
}

export class Category {
    name: string;
    order: string;
}

// Customization Models
export class CustomizationOptions {
    substitutableIngredients: SubstitutableIngredients[];
    additionalIngredients: AdditionalIngredients[];
    removableIngredients: RemovableIngredients[];
}

class SubstitutableIngredients {
    name: string;
    order: number;
    additionalCost: string;
    subtractableCost: string;
}

class AdditionalIngredients {
    name: string;
    order: number;
    additionalCost: string;
}

class RemovableIngredients {
    name: string;
    order: number;
    subtractableCost: string;
}

export class ComboSelection {
    sides: SideItem[];
    drinks: SideItem[];
    categoryName: string;
    categoryOrder: number;
    name: string;
    additionalCost: string;
    maxSelections: string;
    minSelections: string;
    soldOut: boolean;
    order: number;
    sideRequired: boolean;
    drinkRequired: boolean;
}

export class SideItem {
    name: string;
    order: number;
    additionalCost: string;
    maxSelections: string;
    minSelections: string;
    soldOut: boolean;
    required: boolean;
    _id: string;
}
