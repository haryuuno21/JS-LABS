export class InformerComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
            <div class="informer">
                <button type="button" id="click-informer-${data.id}" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="${data.title}" data-bs-content="${data.text}">${data.buttonText}</button>
            </div>
            `
        )
    }
    
    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}
