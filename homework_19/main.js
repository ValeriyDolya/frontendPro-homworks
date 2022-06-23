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
            throw new Error('You cannot add more items')
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


}


class ShoppingListElement {
    constructor(title, count, unit) {
        this.id = elementId;
        this.title = title;
        this.count = count;
        this.unit = unit;
    };
}

const shoppingListObject = new ShoppingList('Покупки', 'Доля', '4');



(() => {
    try {
        shoppingListObject.addIem('Молоко', '3', 'пачка');
       
    } catch (error) {
        console.log(error.message);
    }

    try {
        shoppingListObject.addIem('Яблоки', '2', 'кг');
        
    } catch (error) {
        console.log(error.message);
    }

    try {
        shoppingListObject.addIem('', '30', 'шт');
        
    } catch (error) {
        console.log(error.message);
    }

    try {
        shoppingListObject.addIem('яйца', '', 'шт');
        
    } catch (error) {
        console.log(error.message);
    }

    try {
        shoppingListObject.addIem('яйца', '10', '');
        
    } catch (error) {
        console.log(error.message);
    }

    try {
        shoppingListObject.removeItem('7');
        
    } catch (error) {
        console.log(error.message);
    }

    try {
        shoppingListObject.addIem('сыр', '3', 'кг');
        
    } catch (error) {
        console.log(error.message);
    

    } finally {
        console.log(shoppingListObject.list);
    }
})();