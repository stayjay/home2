export function layout(title, content){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
            <style>
                body {
                    padding: 80px;
                    font: 16px Helvetica, Arial;
                }
                
                h1 {
                    font-size: 2em;
                }
                
                h2 {
                    font-size: 1.2em;
                }
                
                #posts {
                    margin: 0;
                    padding: 0;
                }
                
                #posts li {
                    margin: 40px 0;
                    padding: 0;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #eee;
                    list-style: none;
                }
                
                #posts li:last-child {
                    border-bottom: none;
                }
                
                textarea {
                    width: 500px;
                    height: 300px;
                }
                
                input[type=text],
                textarea {
                    border: 1px solid #eee;
                    border-top-color: #ddd;
                    border-left-color: #ddd;
                    border-radius: 2px;
                    padding: 15px;
                    font-size: .8em;
                }
                
                input[type=text] {
                    width: 500px;
                }
            </style>    
        </head>
        <body>
            <section id="content">${content}</section>
        </body>
    </html>
    `
}

export function list(posts){
    let list = []
    for (let post of posts){
        list.push(`
        <li>
        <h2>${ post.title }</h2>
        <p><a href="/post/${post.id}">Read post</a></p>
        </li>
        `)
    }

    let content = `
    <h1> Posts </h1>
    <h2>You have <strong>${posts.length} </strong> posts </h2>
    <p><a href="/post/new">Create new post</a></p>
    <ul id="posts">${list.join('\n')}</ul>`
    return layout("Posts",content)
}

export function newPost(){
    return layout('New post', `
    <h1> New post </h1>
    <p> Create new post </p>
    <form action="/post" method="post">
        <p><input type = "text" placeholder = "title"  name = "title"/></p>
        <p><textarea placeholder = "content" name = "body"></textarea></p>
        <p><input type = "submit" value = "Create"/></p>
    </form>    
    `)
}

export function show(body){
    return layout(body.title,`
    <h1> ${body.title}</h1>
    <p> ${body.body}</p>
    `)

}

