export interface Product {
    id:                string;
    name:              string;
    slug:              string;
    price:             number;
    category:          Category;
    size:              Size;
    description:       string;
    images:            Image[];
    new:               boolean;
    popular:           boolean;
}

export interface Image {
    url: string;
}

type Size = "S" | "M" | "L";
type Category = "Indoor" | "Outdoor" | "Garden"

export enum ProductsToShow {
    Popular = "popular",
    New = "new",
    All = ""
}

