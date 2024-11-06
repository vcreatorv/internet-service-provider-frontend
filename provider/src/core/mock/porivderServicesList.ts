import { IProviderService } from "../api/service/typing";


export const ProviderServiceList: IProviderService[] = [
    { 
        id: 1, 
        title: "Облачное видеонаблюдение", 
        imgUrl: "/src/image_placeholder.jpg", 
        price: 1129, 
        monthlyPayment: true, 
        unit: "шт", 
        amountDescription: "количество камер", 
        description: "Система видеонаблюдения помогает предотвращать преступления, контролировать сотрудников и отслеживать поток посетителей.<br><br>- Хранение записи в облаке до 14 дней<br>- Уведомления о движениях и звуках", 
        active: true 
    },
    { 
        id: 2, 
        title: "Виртуальная АТС", 
        imgUrl: "/src/image_placeholder.jpg", 
        price: 350, 
        monthlyPayment: true, 
        unit: "шт", 
        amountDescription: "количество номеров", 
        description: "Виртуальная АТС даёт возможность обрабатывать до 100 входящих вызовов одновременно, настроить голосовое приветствие и умное распределение вызовов между отделами, сотрудниками или регионами.<br><br>- До 20 входящих звонков одновременно<br>- Статистика по принятым и пропущенным звонкам", 
        active: true 
    },
    { 
        id: 3, 
        title: "Прокладка интернет-кабеля", 
        imgUrl: "/src/image_placeholder.jpg", 
        price: 500, 
        monthlyPayment: false, 
        unit: "метр", 
        amountDescription: "длина кабеля в метрах", 
        description: "Наши специалисты проведут кабель от точки входа в дом до вашего устройства и настроят интернет-соединение, чтобы вы могли пользоваться всеми преимуществами скоростного интернета.<br><br>- Тип подключения FTTB<br>- Оптоволоконный материал", 
        active: true 
    },
    { 
        id: 4, 
        title: "Подключение статического IP-адреса", 
        imgUrl: "/src/image_placeholder.jpg", 
        price: 150, 
        monthlyPayment: true, 
        unit: "шт", 
        amountDescription: "количество IP-адресов", 
        description: "Постоянный IP-адрес с уникальным идентификатором, который определяется глобально во всей сети.<br><br>- Интернет-протокол ipv4", 
        active: true 
    },
    { 
        id: 5, 
        title: "Установка и подключение PLC-адаптера", 
        imgUrl: "/src/image_placeholder.jpg", 
        price: 2899, 
        monthlyPayment: false, 
        unit: "шт", 
        amountDescription: "количество PLC-адаптеров", 
        description: "PLC-адаптеры – оптимальное решение, которое позволит подключить Домашнее телевидение без прокладки дополнительных проводов и наслаждаться просмотром телеканалов и видеофильмов в цифровом и HD-качестве в любом удобном месте вашей квартиры.<br><br>- Скорость до 900 Мбит/с", 
        active: true 
    },
    { 
        id: 6, 
        title: "Аренда двухдиапазонного роутера", 
        imgUrl: "/src/image_placeholder.jpg", 
        price: 599, 
        monthlyPayment: true, 
        unit: "шт", 
        amountDescription: "количество роутеров", 
        description: "Роутер максимального уровня. Имеет WAN-порт 2,5Гбит/с и 3 порта 1Гбит/с для ваших устройств. Максимальная скорость Wi-Fi более 2 Гбит/с.<br><br>- Скорость до 2,5Гбит/с<br>- Поддержка 2.4 и 5 Ггц", 
        active: true 
    },
];