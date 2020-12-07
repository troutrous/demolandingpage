window.addEventListener('DOMContentLoaded', () => {
    const popup = new Popup();
});
function Popup() {
    this.initEvent();
};

Popup.prototype.initEvent = () => {
    document.getElementById('openPopup').onclick = openPopup;
    document.getElementById('closePopup').onclick = closePopup;
}

const openPopup = () => {
    if (!document.getElementById('modalBackground').classList.contains('d-flex')) {
        document.getElementById('modalBackground').classList.add('d-flex');
        document.getElementById('popupThankyou').classList.add('d-flex');
    }
    else {
        document.getElementById('modalBackground').classList.remove('d-flex');
        document.getElementById('popupThankyou').classList.remove('d-flex');
    }


}

const closePopup = () => {
    document.getElementById('modalBackground').classList.remove('d-flex');
    document.getElementById('popupThankyou').classList.remove('d-flex');
}