import { IProviderService } from "../api/service/typing";


export const ProviderServiceList: IProviderService[] = [
    { 
        id: 1, 
        title: "Облачное видеонаблюдение", 
        img_url: "/src/1.png", 
        price: 1129, 
        monthly_payment: true, 
        unit: "шт", 
        amount_description: "количество камер", 
        description: "Система видеонаблюдения помогает предотвращать преступления, контролировать сотрудников и отслеживать поток посетителей.\n- Хранение записи в облаке до 14 дней\n- Уведомления о движениях и звуках", 
        active: true 
    },
    { 
        id: 2, 
        title: "Виртуальная АТС", 
        img_url: "/src/2.png", 
        price: 350, 
        monthly_payment: true, 
        unit: "шт", 
        amount_description: "количество номеров", 
        description: "Виртуальная АТС даёт возможность обрабатывать до 100 входящих вызовов одновременно, настроить голосовое приветствие и умное распределение вызовов между отделами, сотрудниками или регионами.\n- До 20 входящих звонков одновременно\n- Статистика по принятым и пропущенным звонкам", 
        active: true 
    },
    { 
        id: 3, 
        title: "Прокладка интернет-кабеля", 
        img_url: "/src/3.png", 
        price: 500, 
        monthly_payment: false, 
        unit: "метр", 
        amount_description: "длина кабеля в метрах", 
        description: "Наши специалисты проведут кабель от точки входа в дом до вашего устройства и настроят интернет-соединение, чтобы вы могли пользоваться всеми преимуществами скоростного интернета.\n- Тип подключения FTTB\n- Оптоволоконный материал", 
        active: true 
    },
    { 
        id: 4, 
        title: "Подключение статического IP-адреса", 
        img_url: "/src/4.png", 
        price: 150, 
        monthly_payment: true, 
        unit: "шт", 
        amount_description: "количество IP-адресов", 
        description: "Постоянный IP-адрес с уникальным идентификатором, который определяется глобально во всей сети.\n- Интернет-протокол ipv4", 
        active: true 
    },
    { 
        id: 5, 
        title: "Установка и подключение PLC-адаптера", 
        img_url: "/src/5.png", 
        price: 2899, 
        monthly_payment: false, 
        unit: "шт", 
        amount_description: "количество PLC-адаптеров", 
        description: "PLC-адаптеры – оптимальное решение, которое позволит подключить Домашнее телевидение без прокладки дополнительных проводов и наслаждаться просмотром телеканалов и видеофильмов в цифровом и HD-качестве в любом удобном месте вашей квартиры.\n- Скорость до 900 Мбит/с", 
        active: true 
    },
    { 
        id: 6, 
        title: "Аренда двухдиапазонного роутера", 
        img_url: "/src/6.png", 
        price: 599, 
        monthly_payment: true, 
        unit: "шт", 
        amount_description: "количество роутеров", 
        description: "Роутер максимального уровня. Имеет WAN-порт 2,5Гбит/с и 3 порта 1Гбит/с для ваших устройств. Максимальная скорость Wi-Fi более 2 Гбит/с.\n- Скорость до 2,5Гбит/с\n- Поддержка 2.4 и 5 Ггц", 
        active: true 
    },
];