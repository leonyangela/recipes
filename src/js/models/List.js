import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        // [2,4,8] splice(1,1) => returns 4, original array is [2,8]
        //  [2,4,8] slice(1,1) => returns 4, original array is [2,4,8]
        // [2,4,8] splice(1,2) => returns [4,8], original array is 2
        //  [2,4,8] slice(1,2) => returns 4, original array is [2,4,8]
        
        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        // loop through all elements in the items and then select the one that has 
        // the ID = ID that we passed into the function.

        this.items.find(el => el.id === id).count = newCount;
    }
}