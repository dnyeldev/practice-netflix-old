const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function SelectItem(e){
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //Grab content item from the DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}

//Clicked tab border will be active only
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', SelectItem));

