export default function pressEnter() {
    let items = document.querySelectorAll('[press-enter]');

    if (items) {
        items.forEach(item => {
            item.addEventListener('keydown', function(e) {
                if(e.key === ' ') {
                    e.preventDefault();
                    item.click();
                }
            })
        })
    }
}