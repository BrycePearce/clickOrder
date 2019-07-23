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
}

export class Category {
    name: string;
    order: string;
}
