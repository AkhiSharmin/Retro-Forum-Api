const AllPosts = () => {
    fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
        .then(res => res.json())
        .then(data => {
            if (data && data.posts && Array.isArray(data.posts)) {
                singlePost(data.posts);
            } else {
                console.error(data);
            }
        })
        .catch(error => {
            console.error(error);
        });
}

const singlePost = (posts) => {
    console.log(posts);
    const showAllPost = document.getElementById('allPost')
    for (let post of posts) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex gap-2 my-4 py-10 bg-[#F3F3F5]">
        <div class="avatar">
            <div class="w-12 h-12 rounded-full">
                <img src="${post.image}" />
            </div>
        </div>
        <div>
            <h5 class="text-[14px] text-[#12132DCC] font-semibold">#${post.category}   Author: ${post.author.name}</h5>
            <h1 class="font-xl font-bold text-[#12132D] py-3">${post.title}</h1>
            <p class="font-[16px] text-[#12132D99]">${post.description}</p>
            <div class="divider divider-neutral"></div>

            <div class="flex items-center">
                <p>
                <span class="pr-3"><i class="fa-regular fa-message"></i>
                ${post.comment_count}</span>

                <span class="pr-3"><i class="fa-regular fa-eye"></i>
                ${post.view_count}</span>

                <span><i class="fa-regular fa-clock"></i>
                ${post.posted_time}</span>

                <p/>
                <p>
                    <i class="fa-regular fa-envelope-open"></i>
                <p/>
            </div>
        </div>
    </div>
         
        `;
        showAllPost.appendChild(div)
    }
}

AllPosts();
