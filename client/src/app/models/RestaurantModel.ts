export class Restaurant {
    name: string;
    address: string;
    menu: Array<MenuItem>;
    groupedMenu: GroupedMenu;
}

export class GroupedMenu {
    [key: string]: MenuItem;
}

export class MenuItem {
    name: string;
    description: string;
    img: string;
    price: string;
}
