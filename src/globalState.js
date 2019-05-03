const companyInfo = {
    title: 'Poké Poké',
    phone: '(777) 777 - 7777',
    location: 'Los Angeles, California'
}

const specialMenu = [
    {  
        title: 'Bowl Numero Uno',
        description: 'Salmon, Avocado, Edamame, Cucumber, Masago',
        price: '$25'
    },
    {  
        title: 'Bowl Numero Dos',
        description: 'Shrimp, Green Onion, Cucumber, Crab Stick',
        price: '$25'
    },
    {  
        title: 'Bowl Numero Tres',
        description: 'Marinated Tuna*, Sweet Onion, Seaweed Salad, Masago',
        price: '$25'
    }
]


const globalState = {
    count: 0,
    companyInfo,
    specialMenu,
    // reviews
}

export default globalState; 