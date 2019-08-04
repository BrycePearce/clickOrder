// tslint:disable: variable-name
export class Restaurant {
    name: string;
    address: string;
    menu: Array<MenuItem>;
    groupedMenu: GroupedMenu;
    categories: Array<Category>;
}

export class GroupedMenu {
    [key: string]: MenuItem;
}

export class MenuItem {
    name: string;
    description: string;
    category: string;
    image: string;
    price: string;
    order: number;
    customization: Array<CustomizationOptions>;
    _id: string;
}

export class Category {
    name: string;
    order: string;
}

export class CustomizationOptions {
    name: string;
    price: string;
    soldOut: boolean;
    minSelections: string;
    maxSelections: string;
    addtionalCustomization: Array<CustomizationOptions>;
    _id: string;
}
