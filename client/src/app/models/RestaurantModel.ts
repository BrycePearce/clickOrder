// tslint:disable: variable-name
export class Restaurant {
    name: string;
    address: string;
    groupedMenu: GroupedMenu;
    categories: Array<Category>;
}

export class GroupedMenu {
    [key: string]: MenuItem[];
}

export class MenuItem {
    name: string;
    description: string;
    category: string;
    image: string;
    price: string;
    order: number;
    comboItem: boolean;
    customization: CustomizationOptions;
    comboSelections: ComboSelection;
    _id: string;
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

class ComboSelection {
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
}

class SideItem {
    name: string;
    order: number;
    additionalCost: string;
    maxSelections: string;
    minSelections: string;
    soldOut: boolean;
    required: boolean;
}
