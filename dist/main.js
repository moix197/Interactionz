(function(){
    "use strict"

    let downloadNav = new Interactionz.lib({
        init:true,
        selector: 'downloadNav',
        clickEvent: {
            slideIntoViewItem: 'downloadSection'
        }
    });

    let examplesNav = new Interactionz.lib({
        init:true,
        selector: 'examplesNav',
        clickEvent: {
            slideIntoViewItem: 'examplesSection'
        }
    });

    let integrationNav = new Interactionz.lib({
        init:true,
        selector: 'integrationNav',
        clickEvent: {
            slideIntoViewItem: 'integrationSection'
        }
    });

    let clickMeCta2 = new Interactionz.lib({
        init: true,
        selector: "downloadBtn",
        //content: "---Open---",
        /*colors: {
            bgColor: "#589521",
            fontColor: "#000",
            borderColor: "#893168",
        },*/
        /*hover: {
            type: "switch",
            content: "----Click----"
        },*/
        clickEvent: {
            url:"https://github.com/moix197/Interactionz/blob/master/dist/interactionz.js",
            content: "Thanks for Downloading!",
            extraMethod: function(){
                clickMeCta.toggle()
                clickMeCta3.toggle()
            }
        }
    });

    let integrationBtn1 = new Interactionz.lib({
        init: true,
        selector: "integrationBtn1",
        //content: "1",
        //class: "btnButtonzSm",
        /*colors: {
            bgColor: "#589521",
            fontColor: "#000",
            borderColor: "#893168",
        },*/
        clickEvent: {
            //content: "Close",
            toggleElement: {
                selector: 'integrationElement1',
                siblingsDataName: 'integrationElements',
                startHidden: true,
            }
            /*extraMethod: function(){
                clickMeCta2.toggle()
            }*/
            //scrollTo: "idOfElementToScrollTo"
        }
    });

    let integrationBtn2 = new Interactionz.lib({
        init: true,
        selector: "integrationBtn2",
        clickEvent: {
            toggleElement: {
                selector: 'integrationElement2',
                siblingsDataName: 'integrationElements',
                startHidden: true,
            }
        }
    });

    let integrationBtn3 = new Interactionz.lib({
        init: true,
        selector: "integrationBtn3",
        clickEvent: {
            toggleElement: {
                selector: 'integrationElement3',
                siblingsDataName: 'integrationElements',
                startHidden: true,
            }
        }
    });

    let showLeftBarBtn = new Interactionz.lib({
        init: true,
        content: 'Show Left bar',
        selector: "showLeftBarBtn",
        hover: {
            type: "switch",
        },
        clickEvent: {
            toggleElement: {
                content: "Close Left bar",
                selector: "leftBar",
                animationType: "slideRight",
                startHidden: true,
            }
        }
    });

    let showRightBarBtn = new Interactionz.lib({
        init: true,
        content: 'Show Right bar',
        selector: "showRightBarBtn",
        hover: {
            type: "switch",
        },
        clickEvent: {
            toggleElement: {
                content: "Close Right Bar",
                selector: "rightBar",
                animationType: "slideLeft",
                startHidden: true,
            }
        }
    });

    let showTopBarBtn = new Interactionz.lib({
        init: true,
        content: 'Show Top bar',
        selector: "showTopBarBtn",
        hover: {
            type: "switch",
        },
        clickEvent: {
            toggleElement: {
                content: "Close Top Bar",
                selector: "topBar",
                animationType: "slideDown",
                startHidden: true,
            }
        }
    });

    let showBottomBarBtn = new Interactionz.lib({
        init: true,
        content: 'Show Bottom bar',
        selector: "showBottomBarBtn",
        hover: {
            type: "switch",
        },
        clickEvent: {
            toggleElement: {
                content: "Close Bottom Bar",
                selector: "bottomBar",
                animationType: "slideUp",
                startHidden: true,
            }
        }
    });

    let showModalBtn = new Interactionz.lib({
        init: true,
        content: 'Show Modal',
        selector: "showModalButton",
        hover: {
            type: "switch",
        },
        clickEvent: {
            toggleElement: {
                selector: "modalWindow",
                animationType: "grow",
                startHidden: true,
            }
        }
    });

    let accordion1 = new Interactionz.lib({
        init: true,
        selector: "outerAccordion1",
        clickEvent: {
            toggleElement: {
                selector: "accordionBody1",
                siblingsDataName: "accordionItems",
                animationType: "growY",
                startHidden: true,
            }
        }
    });

    let accordion2 = new Interactionz.lib({
        init: true,
        selector: "outerAccordion2",
        clickEvent: {
            toggleElement: {
                selector: "accordionBody2",
                siblingsDataName: "accordionItems",
                animationType: "growY",
                startHidden: true,
            }
        }
    });

    let accordion3 = new Interactionz.lib({
        init: true,
        selector: "outerAccordion3",
        clickEvent: {
            toggleElement: {
                selector: "accordionBody3",
                siblingsDataName: "accordionItems",
                animationType: "growY",
                startHidden: true,
            }
        }
    });

    let closeModalBtn = new Interactionz.lib({
        init: true,
        selector: 'closeModalBtn',
        /*hover: {
            type: "switch",
        },*/
        clickEvent: {
            extraMethod: function(){
                showModalBtn.toggle()
            }
        }
    });

    let scrollToViewButton = new Interactionz.lib({
        init:true,
        selector: 'scrollToViewButton',
        content: 'click to scroll top',
        hover: {
            type: "switch",
        },
        clickEvent: {
            slideIntoViewItem: 'sectionHero'
        }
    });

})();
