export class ValutaClass{
    id!: number;
    name!: string;
}

export class Rate{
    from!:string;
    to!:string;
    rate!:number;
}


export const ITEMS: string[]=["UAH", "USD", "EUR"];
export const Rates: Rate[]=[    
    {
        from:"USD",
        to:"UAH",
        rate: 42
    },
    {
        from:"UAH",
        to:"USD",
        rate: 45
    },
    {
        from:"USD",
        to:"EUR",
        rate: 0.9
    },
    {
        from:"EUR",
        to:"USD",
        rate: 1.2
    },
    {
        from:"EUR",
        to:"UAH",
        rate: 41
    },
    {
        from:"UAH",
        to:"EUR",
        rate: 43
    }
];

export function getRate (from:string, to:string):number
{
    if (from===to) 
        return 1;
    
    for (let i = 0; i < Rates.length; i++) 
    {
        let r = Rates[i];
    if (r.from == from && r.to == to)
            return r.rate;        
    }
    return 0;

}

