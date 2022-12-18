const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Юлия",
            "id_2": "Марина",
            "id_3": "Елена",
            "id_4": "Светлана",
            "id_5": "Мария",
            "id_6": "Анастасия",
            "id_7": "Екатерина",
            "id_8": "Ольга",
            "id_9": "Анна",
            "id_10": "Людмила"
        }
    }`,
    professionJson: `{
        "count": 5,
        "list": {     
            "id_1": "Бухгалтер",
            "id_2": "Инженер",
            "id_3": "Врач",
            "id_4": "Учитель",
            "id_5": "Повар"           
        }
    }`,
    professionMaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Строитель",
            "id_2": "Пожарный",
            "id_3": "Электрик",
            "id_4": "Сантехник",
            "id_5": "Шахтер"
        }
    }`,
    professionFemaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Актриса",
            "id_3": "Швея",
            "id_4": "Стюардесса",
            "id_5": "Горничная"
        }
    }`,       

    GENDER_MALE: 'Мужской',
    GENDER_FEMALE: 'Женский',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),    

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomGender: function() {
        return this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function() {
        return this.person.gender === this.GENDER_MALE ? this.randomValue(this.firstNameMaleJson) : 
        this.randomValue(this.firstNameFemaleJson);
        
    },

     randomSurname: function() {
        return this.person.gender === this.GENDER_MALE ? this.randomValue(this.surnameJson) :
        `${this.randomValue(this.surnameJson)}a`;        
    },

    randomBirthday: function () {
        let key = this.randomIntNumber(11);
        let month = () => {
            const arrMounth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];  
            return arrMounth[key];
        }
        let day = 0;
        if (month === 'февраля') {
            day = this.randomIntNumber(28, 1);
        } else if (month === 'апреля' || 'июня' || 'сентября' || 'ноября') {
            day = this.randomIntNumber(30, 1);
        } else {
            this.randomIntNumber(31, 1);
        }
        return `${day} ${month()} ${this.randomIntNumber(2000, 1955)} года`;
    },

    randomPatronymic: function () {
        const nameMale = this.randomValue(this.firstNameMaleJson);    
        if (nameMale[nameMale.length-1] === 'й') {
            return this.person.gender === this.GENDER_MALE ? ` ${nameMale.slice(0, nameMale.length-1)}евич` : 
            ` ${nameMale.slice(0, nameMale.length-1)}евна`;            
        } else if (nameMale[nameMale.length-1] === 'а') {
            return this.person.gender === this.GENDER_MALE ? ` ${nameMale.slice(0, nameMale.length-1)}ич` :
            ` ${nameMale.slice(0, nameMale.length-1)}ична`;        
        } else {
            return this.person.gender === this.GENDER_MALE ? ` ${nameMale}ович` : ` ${nameMale}овна`;
        }   
    },

    randomProfession: function () {                   
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomIntNumber() === 1 ? this.randomValue(this.professionMaleJson) : this.randomValue(this.professionJson);
        } else {            
            return this.randomIntNumber() === 1 ? this.randomValue(this.professionFemaleJson) : this.randomValue(this.professionJson);
        } 
    },
    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();        
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthday = this.randomBirthday();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
