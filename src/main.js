import './styles.css';
import { AnimationsLib } from './animationz';
"use strict"

class Interactionz extends AnimationsLib{
    constructor(params) {
        super();
        let elementClassStyles;
        //In the followring two lines we get the values from the classes that are set
        //in the eelemnt, in case we need it to handle the interactions.
        this.btnElement = document.getElementById(params.selector);
        elementClassStyles = getComputedStyle(this.btnElement);

        //setting general values in variables to use later.
        this.isToggled = true;
        this.hasSiblings;
        this.id = params.selector;
        this.content = params.content;
        this.class = params.class;
        this.hover = params.hover;
        this.clickEvent = params.clickEvent || false;
        this.colors = typeof params.colors == 'undefined' ? false : params.colors;
        this.resetBtnCss = params.resetBtnCss;
        this.fontColor = typeof this.colors.fontColor != 'undefined' ? this.colors.fontColor : elementClassStyles.color;
        this.bgColor = typeof this.colors.bgColor != 'undefined' ? this.colors.bgColor : elementClassStyles.backgroundColor;
        this.borderColor = typeof this.colors.borderColor != 'undefined' ? this.colors.borderColor : elementClassStyles.borderColor;


        if(this.clickEvent && this.clickEvent.toggleElement){
            this.toggleValues = typeof this.clickEvent.toggleElement != 'undefined' ? this.clickEvent.toggleElement : false;
            this.toggleElementID = typeof this.toggleValues.selector != 'undefined' ? this.toggleValues.selector : false;
            this.siblingsDataName = typeof this.toggleValues.siblingsDataName != 'undefined' ? this.toggleValues.siblingsDataName : false;
            this.toggleAnimation = typeof this.toggleValues.animationType != 'undefined' ? this.toggleValues.animationType : false;
            this.toggleContent = typeof this.toggleValues.content != 'undefined' ? this.toggleValues.content : false;
            this.startHidden = this.clickEvent.toggleElement.startHidden || false;
            this.hasSiblings = this.siblingsDataName ? true : false;
            this.elementToAnimate = document.getElementById(this.toggleElementID);
        }

        if(this.clickEvent){
            this.slideIntoViewItem = typeof this.clickEvent.slideIntoViewItem != 'undefined' ? this.clickEvent.slideIntoViewItem : false;
        }

        //if the init value = true, we init the object
        params.init && this.init();
        
    }   

    init() {

        this.resetBtnCss && this.btnElement.classList.add('resetBtn');
        this.content && this.setContent(this.content,false);
        this.colors && this.setBgColor(this.bgColor).setFontColor(this.fontColor).setBorderColor(this.borderColor);
        this.clickEvent && this.setClickEvent(this.clickEvent);
        this.hover && this.setHoverState();
        this.class && this.setClass(this.class);

        if(this.clickEvent){
            this.btnElement.style.cursor = "pointer";
        }
        if(this.startHidden){
            this.isToggled = false;        
            this.hide(0);
        }
        if(this.siblingsDataName && this.toggleElementID){
            this.setSiblingsData();
        }
    }
    //down here just clases for setting stuff like "classes", "content", etc.
    setClass(givenClass){
        //if a class is given, apply it
        this.btnElement.classList.add(givenClass);
    }

    setContent(content, saveContent){
        if(this.inProgressAnimation){
            return;
        }
        this.btnElement.innerHTML = content;
        if(saveContent){
            this.content = content;
        };
        return this;
    }

    setSiblingsData(){
        let siblingElement = document.getElementById(this.toggleElementID);
        //if a sibling is given, set the proper data-sibling value and set the data-state to close status
        siblingElement.setAttribute('data-siblings',this.siblingsDataName);
        siblingElement.setAttribute('data-state',"close");
        return this;
    }

    setBgColor(color, saveColor){  
        this.btnElement.style.backgroundColor = color;
        //the "saveColor" parameter is to be used in case people want to keep the button color
        //after they set it mannually, otherwise the color will be overwritten after interaction
        if(saveColor){
            this.bgColor = color;
        };
        return this;
    }

    setFontColor(color, saveColor){
        this.btnElement.style.color = color;
        //the "saveColor" parameter is to be used is case people want to keep the button color
        //after they set it mannually, otherwise the color will be overwritten after interaction
        if(saveColor){
            this.fontColor = color;
        };
        return this;
    }

    setBorderColor(color, saveColor){
        this.btnElement.style.borderColor = color;
        //the "saveColor" parameter is to be used is case people want to keep the button color
        //after they set it mannually, otherwise the color will be overwritten after interaction
        if(saveColor){
            this.borderColor = color;
        };
        return this;
    }
    
    setHoverState(){
        //I do this with css classes because I like the css animations,
        //you could use something fancy like Greensock tweenmax
        //but it would increase a lot the size of the library, 
        //so at least for now we are good this way
        this.btnElement.addEventListener('mouseover',() => {
            this.hover.content && this.setContent(this.hover.content);
            if(this.hover.type == "switch"){
                this.setBgColor(this.fontColor).setFontColor(this.bgColor)
                return;
            }
            this.btnElement.classList.add(this.hover.type);
        });

        this.btnElement.addEventListener('mouseleave',() => {
            this.hover.content && this.setContent(this.content);
            if(this.hover.type == "switch"){
                this.setBgColor(this.bgColor).setFontColor(this.fontColor);       
            }
            this.btnElement.classList.remove(this.hover.type);
        });
    }

    //events related stuff

    setClickEvent(){
        //just setting an onclick handler
        this.btnElement.addEventListener('click', (event) => {
            event.stopPropagation();
            this.clickEvent.url && this.openURL();
            this.clickEvent.extraMethod && this.clickEvent.extraMethod();
            this.clickEvent.showElement && this.show();
            this.slideIntoViewItem && this.slideIntoView(this.slideIntoViewItem);
            //this.hasSiblings ? this.handleSiblings() : this.toggle(); 
            this.toggle(); 
        });
    }

    openURL(){
        let target = this.clickEvent.target || '_blank';
        window.open(this.clickEvent.url,target);
    }

    toggle(){
        if(this.toggleContent){
            //if the element was given a clickevent content, we toggle the element text as well
            !this.isToggled ? this.setContent(this.toggleContent) : this.setContent(this.toggleContent);
            //we save the toggle event to the main content value
            //so that it doesn't get changed to the wrong value on hover       
            let temp = this.content;
            this.content = this.toggleContent;
            this.toggleContent = temp;
        }
        if(this.toggleElementID){
            //we toggle (show or hide) the element
            !this.isToggled ? this.show() : this.hide();     

        } 
        
        this.isToggled = !this.isToggled;
    }

    handleSiblings(){

        let siblingElementsAry = [...document.querySelectorAll(`[data-siblings=${this.siblingsDataName}]`)];
        siblingElementsAry.map((item) => {
            let itemID = item.attributes.id.value;
            if(itemID === this.toggleElementID && item.dataset.state == "close"){
                this.show();
                return;
            }
            item.dataset.state == "open" && this.hide();
        });

    }
}

export const lib = Interactionz;