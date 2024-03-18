// const AllPosts = () => {
//     fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
//         .then(res => res.json())
//         .then(data => {
//             if (data && data.posts && Array.isArray(data.posts)) {
//                 singlePost(data.posts);
//             } else {
//                 console.error(data);
//             }
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }

// const singlePost = (posts) => {
//     console.log(posts);
//     const showAllPost = document.getElementById('allPost')
//     for (let post of posts) {
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <div class="flex gap-2 my-4 py-10 bg-[#F3F3F5]">
//         <div class="avatar">
//             <div class="w-12 h-12 rounded-full">
//                 <img src="${post.image}" />
//             </div>
//         </div>
//         <div>
//             <p>${post.id}</p>
//             <h5 class="text-[14px] text-[#12132DCC] font-semibold">#${post.category}   Author: ${post.author.name}</h5>
//             <h1 class="font-xl font-bold text-[#12132D] py-3">${post.title}</h1>
//             <p class="font-[16px] text-[#12132D99]">${post.description}</p>
//             <div class="divider divider-start text-[#12132D]"></div>
//             <div class="flex justify-between items-center w-[900px]">
//             <div>
//             <p>
//             <span class="pr-3"><i class="fa-regular fa-message"></i>
//             ${post.comment_count}</span>

//             <span class="pr-3"><i class="fa-regular fa-eye"></i>
//             ${post.view_count}</span>

//             <span><i class="fa-regular fa-clock"></i>
//             ${post.posted_time}</span>
//             <p/>
//             </div>

//             <div id="email" class="bg-[#10B981] text-[#ddd] h-7 w-7 rounded-full cursor-pointer">
//             <p>
//                <i class="fa-solid fa-envelope-open ml-[6px]"></i>
//             <p/>
//             </div>

//         </div>
//     </div>

//         `;
//         showAllPost.appendChild(div)

//         const emailIcon = document.getElementById('email');
//         const showClickedData = document.getElementById('showClickedData');
//         emailIcon.addEventListener('click', () => {
//             // Create a new div to show the title
//             const titleDiv = document.createElement('div');
//             titleDiv.innerHTML = post.title;
//             // Append the title div to the body (you can append it to any desired location)
//             showClickedData.appendChild(titleDiv);
//         });
//     }
// }



// AllPosts();








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
    const showAllPost = document.getElementById('allPost');
    for (let post of posts) {
        const div = document.createElement('div');
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
                <div class="divider divider-start text-[#12132D]"></div>
                <div class="flex justify-between items-center w-[900px]">
                    <div>
                        <p>
                            <span class="pr-3"><i class="fa-regular fa-message"></i>
                            ${post.comment_count}</span>

                            <span class="pr-3"><i class="fa-regular fa-eye"></i>
                            ${post.view_count}</span>

                            <span><i class="fa-regular fa-clock"></i>
                            ${post.posted_time}</span>
                        </p>
                    </div>

                    <div class="email-icon bg-[#10B981] text-[#ddd] h-7 w-7 rounded-full cursor-pointer">
                        <p>
                            <i class="fa-solid fa-envelope-open ml-[6px]"></i>
                        <p/>
                    </div>
                </div>
            </div>
        </div>`;
        showAllPost.appendChild(div);

        // Select the email icon within the current post
        const emailIcon = div.querySelector('.email-icon');
        const showClickedData = document.getElementById('showClickedData');

        // Add click event listener to the email icon
        emailIcon.addEventListener('click', (event) => {
            // Get the post object associated with the clicked email icon
            const clickedPost = post;

            // Create a new div to show the title
            const titleDiv = document.createElement('div');
            titleDiv.textContent = clickedPost.title;
            titleDiv.style.padding = '10px'
            titleDiv.style.marginTop = '10px'
            titleDiv.style.backgroundColor = '#fff'



            // Append the title div to the body
            showClickedData.appendChild(titleDiv);
        });
    }
}

AllPosts();
