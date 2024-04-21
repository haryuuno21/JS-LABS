import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
import {Filter} from "../../components/filter/index.js"

import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";


export class MainPage {

    constructor(parent) {
        this.parent = parent
        this.filter = ''
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
        
    getData() {
        ajax.post(urls.getGroupMembers(groupId,this.filter), (data) => {
        this.renderData(data.response.items)
    })
    }
        
    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    renderData(items) {
        this.delAllCards()
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }

    delAllCards(){
        const items = Array.prototype.slice.call(document.getElementsByClassName('card'))
        if(items!=null)
        {
            items.forEach((item) => {
                item.remove()
            });
        }

    }

    changeFilterToModers() {
        this.filter = 'managers'
        this.getData()
    }

    changeFilterToAll() {
        this.filter = ''
        this.getData()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        const filter = new Filter(this.pageRoot)
        filter.render(this.changeFilterToModers.bind(this),this.changeFilterToAll.bind(this))
        this.getData()
    }
}

