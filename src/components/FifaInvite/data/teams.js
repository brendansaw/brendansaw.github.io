export const teams = {
    belgium: {
        id: "belgium",
        name: "Belgium",
        nickname: "Red Devils",
        flag: "🇧🇪",
        stats: [
            { value: '14th', label: "World Cup Appearance" },
            { value: '3rd', label: "Best Finish (2018)" },
            { value: '52', label: "World Cup Goals" },
            { value: '#2', label: "FIFA Ranking Peak" },
        ],
        stars: ["De Bruyne", "Lukaku", "Courtois"],
    },
    nz: {
        id: "nz",
        name: "New Zealand",
        nickname: "All Whites",
        flag: "🇳🇿",
        stats: [
            { value: '3rd', label: "World Cup Appearance" },
            { value: 'UNBEATEN', label: "2010 World Cup (3 draws)" },
            { value: '4', label: "World Cup Goals" },
            { value: '#47', label: "FIFA Ranking Peak" },
        ],
        stars: ["Chris Wood", "Winston Reid"],
    }
}

export const teamsList = Object.values(teams)