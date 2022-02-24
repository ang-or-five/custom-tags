
setInterval(() => {
    //name
    var name = 'word'
    for (let index = 0; index < document.querySelectorAll(name).length; index++) {
        
        var item = document.querySelectorAll(
            name
        )[index]
        if (!item.hasAttribute('customtags-has-been-created')){
            //your code here
            item.innerHTML  = `
            <h1>hello world</h1>
            `
            //end your code
            item.setAttribute('customtags-has-been-created',true)
        }
        
    }
     
}, 1);