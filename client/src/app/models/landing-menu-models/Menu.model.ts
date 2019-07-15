export class Menu {
    categories: Array<Category>;
}

class Category {
    [key: string]: Details[];
}

export class Details {
    name: string;
    description: string;
    img: string;
    price: string;
}
