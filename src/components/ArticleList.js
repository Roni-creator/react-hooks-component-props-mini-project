import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

const postsArr = blogData.posts
function ArticleList() {
    return (
        <main>
            function Articles(posts) {
                <div id="ArticleList">{postsArr.map(post => < Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />)}</div>
            }
        </main>
    )
}



export default ArticleList;