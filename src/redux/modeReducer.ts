import React from "react";
import { ActionsTypeInfern } from "./redux-store";
const CHOOSETYPE='CHOOSETYPE';
const SETOBJSET='SETOBJSET';
const ADDNEWGUY='ADDNEWGUY';
const DELETE='DELETE';
const forestArray=["лес",
"озеро",
"гора",
"река",
"поляна",
"цветы",
"птицы",
"бабочки",
"солнце",
"звезды",
"дождь",
"гроза",
"трава",
"дерево",
"пчела",
"бабка",
"грибы",
"листва",
"скалы",
"водопад",
"море",
"песок",
"волны",
"остров",
"пустыня",
"закат",
"восход",
  "радуга",
  "туман",
  "снег",
  "луна",
  "полярное сияние",
  "луг",
  "газон",
  "ветер",
  "шторм",
  "снежинка",
  "коралловый риф",
  "парк",
  "сад",
  "горный хребет",
  "пещера",
  "водоросли",
  "пруд",
  "фьорд",
  "вулкан",
  "плато",
  "дельфин",
  "кит",
  "жираф",
  "лев",
  "тигр",
  "слон",
  "кенгуру",
  "пингвин",
  "корова",
  "лошадь",
  "собака",
  "кошка",
  "ягуар",
  "пантера",
  "тигр",
  "пчела",
  "медведь",
  "орёл",
  "лебедь",
  "журавль",
  "лось",
  "косуля",
  "кабан",
  "бобр",
  "рысь",
  "волк",
  "лиса",
  "хищник",
  "травоядное",
  "плотоядное",
  "крыса",
  "белка",
  "хомяк",
  "еж",
  "ящерица",
  "уж",
  "змея",
  "черепаха",
  "ящерица",
  "ящерка",
  "ящер",
  "крокодил",
  "аллигатор",
  "камыш",
  "рогоз",
  "растение",
  "цветок",
  "лилия",
  "орхидея",
  "папоротник",
  "трава",
  "дерево",
  "сосна",
  "дуб",
  "берёза",
  "клен",
  "ива",
  "ель",
  "пихта",
  "роза",
  "подсолнух",
  "картофель",
  "морковь",
  "томат",
  "огурец"
]
const SummerArray=["солнце",
"жара",
"пляж",
"море",
"отпуск",
"пальма",
"волна",
"песок",
"отдых",
"летний",
"шезлонг",
"прогулка",
"каникулы",
"пикник",
"плавание",
"вода",
"гамак",
"коктейль",
"горячий",
"загар",
"лодка",
"пират",
"парус",
"жаркий",
"тропики",
"пустыня",
"поле",
"светло",
  "бассейн",
  "горки",
  "водные виды спорта",
  "спасательный круг",
  "шапка",
  "очки",
  "шорты",
  "платье",
  "сандалии",
  "шлепанцы",
  "воздушный шар",
  "фейерверк",
  "барбекю",
  "зонтик",
  "парк",
  "фрукты",
  "мороженое",
  "велосипед",
  "ролики",
  "скейтборд",
  "концерт",
  "фестиваль",
  "открытый кинотеатр",
  "зоопарк",
  "выставка",
  "гамак",
  "корабль",
  "бриз",
  "кораллы",
  "маяк",
  "шезлонг",
  "подводное плавание",
  "гребля",
  "водный мотоцикл",
  "серфинг",
  "пляжный волейбол",
  "катание на банане",
  "рыбалка",
  "водные лыжи",
  "солнечные очки",
  "солнцезащитный крем",
  "санки",
  "загар",
  "пляжная вечеринка",
  "морской бриз",
  "свежие фрукты",
  "летний шторм",
  "волейбольная сетка",
  "прохладительный напиток",
  "кокосовый орех",
  "летний коктейль",
  "подводное плавание",
  "полет на дельтаплане",
  "пикник на природе",
  "водный парк",
  "экскурсия",
  "каникулы",
  "водный спорт",
  "пейзаж",
  "закат",
  "рассвет",
  "фотография",
  "отпуск",
  "шум прибоя",
  "морска"
]
const lifeArray=["счастье",
"любовь",
"дружба",
"успех",
"мечта",
"приключение",
"рост",
"испытание",
"преодоление",
"саморазвитие",
"цель",
"самоутверждение",
"самооценка",
"эмоции",
"радость",
"горе",
"изменение",
"вызов",
"смысл",
"надежда",
"вера",
"открытие",
"увлечение",
"вдохновение",
"перемены",
"путешествие",
"реализация",
"поступок",
  "отношения",
  "понимание",
  "семья",
  "достижение",
  "признание",
  "ответственность",
  "волна",
  "напряжение",
  "решение",
  "выбор",
  "сближение",
  "прогресс",
  "самосовершенствование",
  "созидание",
  "творчество",
  "искусство",
  "удовлетворение",
  "удача",
  "разочарование",
  "процесс",
  "победа",
  "поражение",
  "взаимодействие",
  "поддержка",
  "надежда",
  "интуиция",
  "опыт",
  "обучение",
  "самосознание",
  "самопознание",
  "самоопределение",
  "самоконтроль",
  "расширение",
  "изменение",
  "приспособление",
  "преобразование",
  "выживание",
  "сопереживание",
  "справедливость",
  "совершенство",
  "жизненный цикл",
  "воспоминания",
  "планы",
  "предназначение",
  "предприимчивость",
  "благополучие",
  "отдача",
  "потенциал",
  "смирение",
  "взросление",
  "преображение",
  "равновесие",
  "принятие",
  "намерение",
  "раскрытие",
  "проявление",
  "наслаждение",
  "исполнение",
  "сбыча",
  "достижение",
  "самодисциплина",
  "обетование",
  "социализация",
  "оптимизм",
  "благодарность",
]
const winterArray=["снег",
"мороз",
"лед",
"санки",
"горнолыжный курорт",
"горы",
"склон",
"лыжи",
"снежинка",
"сугроб",
"снежная буря",
"шапка",
"перчатки",
"шарф",
"коньки",
"каток",
"снежки",
"снеговик",
"зимний",
"новый год",
"рождество",
"елка",
"праздник",
"фейерверк",
"сияние",
"снежная королева",
"снегурочка",
"Дед Мороз",
  "сани",
  "камин",
  "грецкие орехи",
  "печенье",
  "горячий шоколад",
  "комингс",
  "шуба",
  "тепло",
  "северный полюс",
  "северное сияние",
  "зимний пейзаж",
  "сосулька",
  "скользкий",
  "метель",
  "сквозняк",
  "обморок",
  "последний снег",
  "пингвины",
  "маска",
  "холод",
  "порыв ветра",
  "замерзание",
  "зимняя река",
  "снегопад",
  "ледяной",
  "замок изо льда",
  "снежные горки",
  "ледяные фигуры",
  "блины",
  "катание на снегоходе",
  "северный олень",
  "белый пух",
  "салют",
  "узоры на окнах",
  "скользкая дорога",
  "дикобраз",
  "гололед",
  "кристаллы",
  "зимний отдых",
  "заснеженные деревья",
  "зимний спорт",
  "вьюга",
  "промерзание",
  "ледяной покров",
  "морозный воздух",
  "саночные гонки",
  "зимний карнавал",
  "ледовый дворец",
  "полярное сияние",
  "подогреваемый автомобиль",
  "северное солнце",
  "скользкая тропа",
  "трескучий снег",
  "водопад изо льда",
  "морозное утро",
  "зимняя экскурсия",
]
type gameObj={
    name:string,
    main:Array<string>,
    id:number,
    img:string
}
type SetObj={
    countofWords:string,
    time:string,
    dangerfor:string
}
const initialState={
    typeofgame:[{name:'Forest',main:forestArray,id:1,img:"https://kartinkin.net/uploads/posts/2021-03/thumbs/1616118913_52-p-zima-krasivie-foto-59.jpg"},{ name:'Summer', main:SummerArray,id:2,img:'https://pibig.info/uploads/posts/2022-06/1655680600_1-pibig-info-p-kartinki-leto-more-solntse-plyazh-krasivo-1.jpg'},{ name:'Life', main:lifeArray,id:3,img:'https://ichef.bbci.co.uk/news/1024/branded_ukrainian/8629/production/_114054343_ff8a2c9c-430d-4570-b44e-b1f1bbb22fa7.jpg'},{ name:'Winter',main:winterArray,id:4,img:'https://research.wri.org/sites/default/files/gfr/2020-11/GFR-Malaysia-Kalimantan-border-tropical-forest-homepage_0.jpg'}] as Array<gameObj>,
    curentArray:null as Array<string>|null,
    objectOfsettings:null as SetObj|null,
    arrayWithTeams:[] as Array<string>
}
type initiAlstate=typeof initialState

 export  const modeReducer=(state=initialState,action:ActionsType):initiAlstate=>{
switch(action.type){
    case CHOOSETYPE:{
        return{...state,
        curentArray:action.array
        }
    }
    case SETOBJSET:{
        return {...state,
        objectOfsettings:{...action.obj}
        }
    }
    case ADDNEWGUY:{
        return{...state,
        arrayWithTeams:[...state.arrayWithTeams,action.elem]
        }
    }
    case DELETE:{
      return{...state,
      arrayWithTeams:[]
      }
    }
    default:
        return state
}
}
type ActionsType=ActionsTypeInfern<typeof actionsMode>
export const actionsMode={
    chooseType:(array:Array<string>)=>{
    return{
        type:CHOOSETYPE,
        array:array
    }as const 
    },
    setObjectSettings:(obj:SetObj)=>{
      return{
        type:SETOBJSET,
        obj:obj
      } as const
    },
    addTeamArray:(elem:any)=>{
        return{
            type:ADDNEWGUY,
            elem:elem
        } as const 
    },
    delete:()=>{
      return {
        type:DELETE
      }as const
    }
}