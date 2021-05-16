

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildPosts(data);
    })
}

const buildPosts = (blogPosts) => {
    var blogPostContent = "";
    for (blogPost of blogPosts) {
        //Usually, date is in iso-string format in a JSON file
        //We need to convert it to string to use it as a date in readable form
        const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
        //We use parseInt() to convert string to number

        const postImage = `${API_BASE_URL}${blogPost.post_image}`;

        blogPostContent += `
        <a href="post.html" style="text-decoration: none;">
        <div class="post">
            <div class="post-image" style="background-image: url(${postImage})"></div>
            <div class="post-text">
                <div class="post-date">${postDate}</div>
                <div class="post-heading">${blogPost.title}</div>
                <div class="post-content"> ${blogPost.content}</div>
            </div>
        </div>
        </a>
        `
    }

    document.querySelector('.blog-posts').innerHTML = blogPostContent;

}