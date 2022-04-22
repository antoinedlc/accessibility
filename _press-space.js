export default function pressEnter() {
    let items = document.querySelectorAll('[press-enter]');

    if (items) {
        items.forEach(item => {
            item.addEventListener('keydown', function(e) {
                if(e.key === 'Enter') {
                    e.preventDefault();
                    item.click();
                }
            })
        })
    }
}