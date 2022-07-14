let elementId = 1;

class ShoppingList {
    list =[];
    
    constructor(title, author, maxListLength) {
        
        this.title = title;
        this.author = author;
        this.maxCount = maxListLength;
    };

    addIem(title, count, unit) {
        if (this.list.length >= this.maxCount) {
            throw new Error(`!!! Превышено максимальное количество`)
        }

        if (title === undefined || title === '') {
            throw new Error(`Вы не заполнили поле title...`)
        }

        if (count === undefined || count === '') {
            throw new Error(`Вы не заполнили поле count у ${title}...`)
        }

        if (unit === undefined || unit === '') {
            throw new Error(`Вы не заполнили поле unit у ${title}...`)
        }

       this.list.push(new ShoppingListElement(title, count, unit));
       elementId++;
    };

    removeItem(id) {
        if (!this.list.find((elem) => elem.id === +id)) {
            throw new Error(`Нет элемента c id ${id}`)
        }

        this.list = this.list.filter((elem) => elem.id !== +id)
    }
    [Symbol.iterator]() {
        let count = 0;

        return {
            next: () => {
                const value = this.list[count++];
                return {value, done: !value};
            },
        }
    }
   

};

class ShoppingListElement {
    constructor(title, count, unit) {
        this.id = elementId;
        this.title = title;
        this.count = count;
        this.unit = unit;
    };
};

const shoppingListObject = new ShoppingList('Покупки', 'Доля', '4');

// ------------------------------------------------------------------------------

function addItem(title, count, unit) {
    try {
        shoppingListObject.addIem(title, count, unit);
       
    } catch (error) {
        console.log(error.message);
    } finally {
        // console.log(shoppingListObject.list);
    }
};

function removeItem(id) {
        try {
        shoppingListObject.removeItem(id);
        
        } catch (error) {
            console.log(error.message);
        } finally {
            // console.log(shoppingListObject.list);
        }
};




// -------------------------------------------------------------------

addItem('Молоко', '3', 'пачка');
addItem('Яблоки', '2', 'кг');
addItem('', '30', 'шт');
addItem('яйца', '', 'шт');
addItem('яйца', '10', '');
addItem('сыр', '3', 'кг');
addItem('лук', '2', 'кг');
addItem('сливы', '4', 'кг');
removeItem('7');

//--------------------------------------------------------------------

for (const item of shoppingListObject) {
    console.log(item);
};