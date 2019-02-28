export default class turn {
    constructor() {
        this.currentTurn = 0;
    }

    nextTurn() {
        // go next turn
        this.currentTurn += 1;
    }

    get turn() {
        return this.currentTurn;
    }
}