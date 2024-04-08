export class Filter {
    constructor(parent) {
        this.parent = parent;
        this.filter = ''
    }

    getHTML() {
        return (
            `
                <div class="filter" style="width: 300px;">
                    <p>
                        <input type="radio" id='radioAll' value="all" checked name="filterGroup"/>Все пользователи
                    </p>
                    <p>
                        <input type="radio" id='radioModers' value="moders" name="filterGroup"/>Модераторы
                    </p>
                </div>
            `
        )
    }
    
    render() {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}