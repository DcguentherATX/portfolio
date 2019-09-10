import React from 'react';

const Blog = (props) => {
    return (
        <div className="blog-container">
            <h3 className="blog-header">Blog</h3>
            <div className="date">Monday, September 9, 2019</div>
            <div className="entry">
                <p> This will be a blog section where I can write about anything that I am doing at the moment.
                Whether it is coding fun side projects, my latest culinary experiment, travelling escapades, or fun
                with friends, I can include that all here!
            </p>
                <p>I'm not quite sure what I will write my first blog post about.  Perhaps it will be about my move to Austin
                    from New York, my bootcamp experience, or the technical job hunt in Austin.  Whatever it will be, I'm sure it
                    will be a little theraputic
            </p>
                <p>Right now, this is just holder text until I write my first entry.  This will help me with styling and
            spacing as I work on completing my portfolio page.</p>
            </div>
        </div>
    )
}

export default Blog;