export type Products = Product[];

export type Product = {
    id: string;
    image: string;
    name: string;
    rating: Rating;
    priceCents: number;
};

type Rating = {
    stars: number;
    count: number;
};
