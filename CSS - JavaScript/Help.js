 function Setter1() {
    Toggle1();
    Toggle2();
    Toggle3();
    Toggle4();
}



function Toggle1() {
    const PageExpander = document.getElementById('Faq_Toggle1');
    if(PageExpander.className === "Definition1") {
        PageExpander.className += " Definition_Appear";
    } else {
        PageExpander.className = "Definition1";
    }
}

function Toggle2() {
    const PageExpander = document.getElementById('Faq_Toggle2');
    if(PageExpander.className === "Definition2") {
        PageExpander.className += " Definition_Appear";
    } else {
        PageExpander.className = "Definition2";
    }
}

function Toggle3() {
    const PageExpander = document.getElementById('Faq_Toggle3');
    if(PageExpander.className === "Definition3") {
        PageExpander.className += " Definition_Appear";
    } else {
        PageExpander.className = "Definition3";
    }
}

function Toggle4() {
    const PageExpander = document.getElementById('Faq_Toggle4');
    if(PageExpander.className === "Definition4") {
        PageExpander.className += " Definition_Appear";
    } else {
        PageExpander.className = "Definition4";
    }
}
function Toggle13() {
    const PageExpander = document.getElementById('Faq_Toggle13');
    if(PageExpander.className === "Definition13") {
        PageExpander.className += " Definition_Appear";
    } else {
        PageExpander.className = "Definition13";
    }
}
