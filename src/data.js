export const data = {
    types: [{
        id: 1,
        by: 'Атлант',
        title: 'СТАНДАРТНЫЙ И ИНТЕГИРОВАННЫЙ РЕЙЛИНГ (прямоугольная дуга)',
        descr: 'Стандартный рейлинг - рейки вдоль крыши. Между крышей и рейлингом есть просвет. Интегрированный рейлинг - рейки вдоль крыши. Между крышей и рейлингом нет просвета.',
        image: 'http://placehold.it/200x200',
        maxRentDay: 5,
        defaultPrice: {
            days: 45,
            price: 50
        },
        rentDays: [
            { min: 5, max: 6, price: 100 },
            { min: 7, max: 13, price: 90 },
            { min: 14, max: 20, price: 80 },
            { min: 21, max: 29, price: 70 },
            { min: 30, max: 39, price: 60 }
        ],
    }, {
        id: 2,
        title: 'СТАНДАРТНЫЙ И ИНТЕГИРОВАННЫЙ РЕЙЛИНГ (прямоугольная дуга)',
        descr: 'Стандартный рейлинг - рейки вдоль крыши. Между крышей и рейлингом есть просвет. Интегрированный рейлинг - рейки вдоль крыши. Между крышей и рейлингом нет просвета.',
        image: 'http://placehold.it/200x200',
        maxRentDay: 5,
        defaultPrice: {
            days: 45,
            price: 80
        },
        rentDays: [
            { min: 5, max: 6, price: 200 },
            { min: 7, max: 13, price: 160 },
            { min: 14, max: 20, price: 140 },
            { min: 21, max: 29, price: 120 },
            { min: 30, max: 39, price: 100 }
        ]
    }, {
        id: 3,
        title: 'ГЛАДКАЯ КРЫША, ШТАТНЫЕ МЕСТА (аэродинамичная дуга)',
        descr: 'Гладкая крыша - большинство современных автомобилей. Штатное место - пластиковые заглушки или сдвижные части под которыми находится штатное место (резьба и др.)',
        image: 'http://placehold.it/200x200',
        maxRentDay: 5,
        defaultPrice: {
            days: 45,
            price: 100
        },
        rentDays: [
            { min: 5, max: 6, price: 240 },
            { min: 7, max: 13, price: 200 },
            { min: 14, max: 20, price: 160 },
            { min: 21, max: 29, price: 140 },
            { min: 30, max: 39, price: 120 }
        ]
    }, {
        id: 4,
        title: 'Велокрепление Thule FreeRide 532. (1 велосипед)',
        descr: 'Простое и функциональное крепление для велосипедов, удовлетворяющее всем основным условиям',
        maxRentDayDay: 5,
        image: 'http://placehold.it/200x200',
        maxRentDay: 5,
        defaultPrice: {
            days: 45,
            price: 50
        },
        rentDays: [
            { min: 5, max: 6, price: 100 },
            { min: 7, max: 13, price: 90 },
            { min: 14, max: 20, price: 80 },
            { min: 21, max: 29, price: 70 },
            { min: 30, max: 39, price: 60 }
        ]
    }, {
        id: 5,
        title: 'Велокрепление Thule FreeRide 532. (1 велосипед)',
        descr: 'Велокрепление для максимально быстрой и удобной установки велосипедов весом до 20 кг.',
        image: 'http://placehold.it/200x200',
        maxRentDay: 5,
        defaultPrice: {
            days: 45,
            price: 60
        },
        rentDays: [
            { min: 5, max: 6, price: 160 },
            { min: 7, max: 13, price: 130 },
            { min: 14, max: 20, price: 100 },
            { min: 21, max: 29, price: 80 },
            { min: 30, max: 39, price: 70 }
        ]
    }, {
        id: 6,
        title: 'Велокрепление Thule FreeRide 532. (1 велосипед)',
        image: 'http://placehold.it/200x200',
        descr: 'Проверенная, прочная, а также простая в эксплуатации и установке. Установка крепления возможна на прямоугольные, аэродинамические и на крыловидные поперечины',
        maxRentDay: 5,
        defaultPrice: {
            days: 45,
            price: 70
        },
        rentDays: [
            { min: 5, max: 6, price: 240 },
            { min: 7, max: 13, price: 200 },
            { min: 14, max: 20, price: 160 },
            { min: 21, max: 29, price: 120 },
            { min: 30, max: 39, price: 90 }
        ]
    }],

    products: [{
        id: 1,
        title: 'Атлант',
        model: 'Classic 320',
        volume: 320,
        size: '130х78х36',
        maxRentDay: 5,
        defaultPrice: {
            days: 45,
            price: 70
        },
        rentDays: [
            { min: 5, max: 6, price: 160 },
            { min: 7, max: 13, price: 140 },
            { min: 14, max: 20, price: 120 },
            { min: 21, max: 29, price: 100 },
            { min: 30, max: 39, price: 80 }
        ]
    }, {
        id: 2,
        title: 'Атлант',
        model: 'Sport 431',
        volume: 430,
        size: '175х78х39',
        maxRentDay: 5,
        defaultPrice: {
            days: 45,
            price: 90
        },
        rentDays: [
            { min: 5, max: 6, price: 200 },
            { min: 7, max: 13, price: 180 },
            { min: 14, max: 20, price: 160 },
            { min: 21, max: 29, price: 140 },
            { min: 30, max: 39, price: 110 }
        ]
    }, {
        id: 3,
        title: 'Sotra',
        model: 'XT-450',
        volume: 450,
        size: '192х78х39',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 100
        },
        rentDays: [
            { min: 5, max: 6, price: 220 },
            { min: 7, max: 13, price: 200 },
            { min: 14, max: 20, price: 180 },
            { min: 21, max: 29, price: 160 },
            { min: 30, max: 39, price: 125 }
        ]
    }, {
        id: 4,
        title: 'Saturn',
        model: 'Saturn 460',
        volume: 460,
        size: '175х82х42',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 120
        },
        rentDays: [
            { min: 5, max: 6, price: 240 },
            { min: 7, max: 13, price: 220 },
            { min: 14, max: 20, price: 200 },
            { min: 21, max: 29, price: 180 },
            { min: 30, max: 39, price: 140 }
        ]
    }, {
        id: 5,
        title: 'Атлант',
        model: 'Sport 501',
        volume: 500,
        size: '225х78х39',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 120
        },
        rentDays: [
            { min: 5, max: 6, price: 240 },
            { min: 7, max: 13, price: 220 },
            { min: 14, max: 20, price: 200 },
            { min: 21, max: 29, price: 180 },
            { min: 30, max: 39, price: 140 }
        ]
    }, {
        id: 6,
        title: 'Thule',
        model: 'Pacific 100',
        volume: 380,
        size: '140х90х40',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 140
        },
        rentDays: [
            { min: 5, max: 6, price: 300 },
            { min: 7, max: 13, price: 260 },
            { min: 14, max: 20, price: 220 },
            { min: 21, max: 29, price: 200 },
            { min: 30, max: 39, price: 160 }
        ]
    }, {
        id: 7,
        title: 'Thule',
        model: 'Pacific 200',
        volume: 460,
        size: '175х82х42',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 160
        },
        rentDays: [
            { min: 5, max: 6, price: 350 },
            { min: 7, max: 13, price: 300 },
            { min: 14, max: 20, price: 260 },
            { min: 21, max: 29, price: 220 },
            { min: 30, max: 39, price: 180 }
        ]
    }, {
        id: 8,
        title: 'Sotra',
        model: 'Altro 460',
        volume: 460,
        size: '185х80х40',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 160
        },
        rentDays: [
            { min: 5, max: 6, price: 350 },
            { min: 7, max: 13, price: 300 },
            { min: 14, max: 20, price: 260 },
            { min: 21, max: 29, price: 220 },
            { min: 30, max: 39, price: 180 }
        ]
    }, {
        id: 9,
        title: 'Sotra',
        model: 'Altro 500',
        volume: 500,
        size: '200х90х40',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 160
        },
        rentDays: [
            { min: 5, max: 6, price: 350 },
            { min: 7, max: 13, price: 300 },
            { min: 14, max: 20, price: 260 },
            { min: 21, max: 29, price: 220 },
            { min: 30, max: 39, price: 180 }
        ]
    }, {
        id: 10,
        title: 'Satillite',
        model: 'Satellit 520',
        volume: 520,
        size: '196x78x43',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 160
        },
        rentDays: [
            { min: 5, max: 6, price: 350 },
            { min: 7, max: 13, price: 300 },
            { min: 14, max: 20, price: 260 },
            { min: 21, max: 29, price: 220 },
            { min: 30, max: 39, price: 180 }
        ]
    }, {
        id: 11,
        title: 'Neumann',
        model: 'XXL',
        volume: 650,
        size: '210х90х44',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 200
        },
        rentDays: [
            { min: 5, max: 6, price: 450 },
            { min: 7, max: 13, price: 400 },
            { min: 14, max: 20, price: 350 },
            { min: 21, max: 29, price: 300 },
            { min: 30, max: 39, price: 250 }
        ]
    }, {
        id: 12,
        title: 'Thule',
        model: 'Motion 200',
        volume: 460,
        size: '175х85х45',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 250
        },
        rentDays: [
            { min: 5, max: 6, price: 500 },
            { min: 7, max: 13, price: 450 },
            { min: 14, max: 20, price: 400 },
            { min: 21, max: 29, price: 350 },
            { min: 30, max: 39, price: 300 }
        ]
    }, {
        id: 13,
        title: 'Thule',
        model: 'Dynamic 800',
        volume: 400,
        size: '204х84х34',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 300
        },
        rentDays: [
            { min: 5, max: 6, price: 600 },
            { min: 7, max: 13, price: 540 },
            { min: 14, max: 20, price: 480 },
            { min: 21, max: 29, price: 420 },
            { min: 30, max: 39, price: 350 }
        ]
    }, {
        id: 14,
        title: 'Thule',
        model: 'Motion 800',
        volume: 520,
        size: '208х80х45',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 300
        },
        rentDays: [
            { min: 5, max: 6, price: 600 },
            { min: 7, max: 13, price: 540 },
            { min: 14, max: 20, price: 480 },
            { min: 21, max: 29, price: 420 },
            { min: 30, max: 39, price: 350 }
        ]
    }, {
        id: 15,
        title: 'Thule',
        model: 'Dynamic 900',
        volume: 520,
        size: '235х95х38',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 400
        },
        rentDays: [
            { min: 5, max: 6, price: 700 },
            { min: 7, max: 13, price: 640 },
            { min: 14, max: 20, price: 580 },
            { min: 21, max: 29, price: 520 },
            { min: 30, max: 39, price: 450 }
        ]
    }, {
        id: 16,
        title: 'Thule',
        model: 'Motion 900',
        volume: 670,
        size: '235х95х47',
        maxRentDay: 5,
        defaultPrice: {
            days: 40,
            price: 400
        },
        rentDays: [
            { min: 5, max: 6, price: 700 },
            { min: 7, max: 13, price: 640 },
            { min: 14, max: 20, price: 580 },
            { min: 21, max: 29, price: 520 },
            { min: 30, max: 39, price: 450 }
        ]
    }, ]
}