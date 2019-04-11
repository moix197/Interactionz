class Animationz{
    //no too many comments here.
    //the names are kind of self explanatory
    constructor(){
        this.inProgressAnimation;
        this.elementToAnimate;
        this.animationDuration;
    }

    translateY(duration, offset, status){
        this.elementToAnimate.style.transition = `transform ${duration}s`;
        this.elementToAnimate.style.transform = `translateY(${offset})`;
        setTimeout(() => {
            this.inProgressAnimation = false;
        },duration*1000);
    }

    translateX(duration, offset, status){
        this.elementToAnimate.style.transition = `transform ${duration}s`;
        this.elementToAnimate.style.transform = `translateX(${offset})`;
        setTimeout(() => {
            this.inProgressAnimation = false;
        },duration*1000);
    }

    fadeIn(duration){
        this.elementToAnimate.style.transition = `opacity ${duration}s`;
        this.elementToAnimate.style.opacity = 1;
        this.elementToAnimate.style.visibility = 'visible';
        setTimeout(() => {
            this.inProgressAnimation = false;

        },duration*1000);
    }

    grow(duration,size){
        this.elementToAnimate.style.transition = `transform ${duration}s`;
        this.elementToAnimate.style.transform = `scale(${size})`;
        setTimeout(() => {
            this.inProgressAnimation = false;
        },duration*1000)
    }

    growY(duration,size){
        this.elementToAnimate.style.transition = `max-height ${duration}s`;
        this.elementToAnimate.style.maxHeight = size;
        setTimeout(() => {
            this.inProgressAnimation = false;
        },duration*1000);
    }

    fadeOut(duration){
        this.elementToAnimate.style.transition = `opacity ${duration}s`;
        this.elementToAnimate.style.opacity = 0;
        setTimeout(() => {
            this.elementToAnimate.style.visibility = 'hidden';
            this.inProgressAnimation = false;
        },duration*1000);
    }

    show(duration = 0.2,){
        if(this.inProgressAnimation){
            return;
        }

        this.inProgressAnimation = true;
        if(this.toggleAnimation == 'slideLeft' || this.toggleAnimation == 'slideRight'){
            this.translateX(duration, 0);            
        
        }else if(this.toggleAnimation == 'slideUp' || this.toggleAnimation == 'slideDown'){
            this.translateY(duration, 0);            
        
        }else if(this.toggleAnimation == 'fadeIn'){
            this.fadeIn(duration);

        }else if(this.toggleAnimation == 'grow'){
            this.grow(duration,1);
            
        }else if(this.toggleAnimation == 'growY'){
            this.growY(1,'1000px');
            
        }else{
            this.elementToAnimate.style.display = "block";
        }

        if(this.hasSiblings){
            //if the element has siblings after showing it we set the status to open.
            this.elementToAnimate.setAttribute('data-state','open');     
            this.inProgressAnimation = false;
        }
    }

    hide(duration = 0.2){
        if(this.inProgressAnimation){
            return;
        }
        this.inProgressAnimation = true;
        switch (this.toggleAnimation) {
            case 'slideLeft':
                this.translateX(duration, '100%');
                break;
            case 'slideRight':
                this.translateX(duration, '-100%');            
                break;
            case 'slideUp':
                this.translateY(duration, '100%');            
                break;
            case 'slideDown':
                this.translateY(duration, '-100%');            
                break;
            case 'fadeIn':
                this.fadeOut(duration);            
                break;
            case 'grow':
                this.grow(duration,0);
                break;
            case 'growY':
                this.growY(duration,0);
                break;
            default:
                this.elementToAnimate.style.display = "none";
                this.inProgressAnimation = false;
                break;
        }
        
        if(this.hasSiblings){
            //if the element has siblings after hiding it we set the status to close.
            this.elementToAnimate.setAttribute('data-state','close');            
        }
    }

    slideIntoView(element){
		document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
    }

}

export const AnimationsLib = Animationz;