let posts = [

    {title:"post 1", body: "this is the first POST", createdAt: new Date().getTime() },
    {title:"post 2", body: "this is post 2",createdAt:new Date().getTime()}

];

function getPosts(){

    

        let output="";
        posts.forEach((post)=>{

            output+= `<li>${post.title} : ${post.body} : ${Math.floor((new Date().getTime()-post.createdAt)/1000)} second ago </li>`;
        });
        document.body.innerHTML = output;
                
  
}

function createPosts(post){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            posts.push({...post,createdAt: new Date().getTime()});
            const error = false;
            if(!error) resolve();
            else reject('ERROR!');
    
        },500);


    })
    
}




function deletePost(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{


         const error = false;
         if(posts.length>0){

            posts.pop();
         }
         else error = true;
         if(!error) resolve();
         else reject('ERROR:NO POSTS TO DELETE !')

        },1000)
    })


}

//getPosts();
createPosts({title: "post 3", body: "post 3 yall!"})
.then(()=>{

    getPosts();//all three posts displayed
    deletePost().then(()=>{     //deletes first post and displays remaining two

        getPosts();
        deletePost().then(()=>{

            getPosts();
            deletePost().then(()=>{

                getPosts();
                deletePost().then(getPosts)
                .catch(err=>console.log(err));
            })
        })
    })

})
.catch(err=>console.log(err));


createPosts({title: "post 4", body: "post 4 yall!"}).then(()=>{

    getPosts();
    deletePost().then(getPosts)
    .catch(err=>console.log(err))
})
.catch(err=>console.log(err));



