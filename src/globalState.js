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

const reviews = [
    {
        company: 'The Food Network',
        author: 'Joe Bastiachi',
        authorInfo: 'Winner Of The Chef Masters',
        highlight: 'Best Poke Restaurant in Los Angeles!',
        review: 'Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.'
    },
    {
        company: 'Gordon Ramsay\'s Best Kitchen Dream',
        author: 'Gordon Ramsay',
        authorInfo: 'Michelin Star Chef',
        highlight: 'Best Poke Restaurant in Los Angeles!',
        review: 'Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.'
    },
    {
        company: 'Chopped',
        author: 'Anne Casella',
        authorInfo: 'Winner Of Chopped',
        highlight: 'Best Poke Restaurant in Los Angeles!',
        review: 'Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.'
    },
    {
        company: 'Iron Chef America',
        author: 'Rokusaburo Tsai',
        authorInfo: 'Winner Of The Iron Chef America',
        highlight: 'Best Poke Restaurant in Los Angeles!',
        review: 'Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.'
    },
    {
        company: 'Chef\'s Table',
        author: 'Joe Bastiachi',
        authorInfo: 'Winner Of The Chef\'s Table',
        highlight: 'Best Poke Restaurant in Los Angeles!',
        review: 'Lorem ipsum dolor amet fanny pack la croix tumblr whatever chartreuse, lyft austin flannel godard plaid brooklyn viral poke. DIY viral shaman, humblebrag YOLO deep v 3 wolf moon twee kale chips bespoke ugh squid church-key.'
    }
]

const globalState = {
    count: 0,
    companyInfo,
    specialMenu,
    reviews,
    reviewStatus: {
        currentReview: 0,
    },
}

export default globalState; 