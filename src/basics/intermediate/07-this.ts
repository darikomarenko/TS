const user = {
    id: 123,
    admin: false,
    becomeAdmin: function(){
        this.admin = true;
    }
}

// <button onClick='myClickHandler(2)">Click me</button>

function myClickHandler(
    this: HTMLButtonElement,
    event: Event,
) {
    this.disabled = true;
}