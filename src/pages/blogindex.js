import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from the Django API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/blogs/");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="home_blog-area section-padding30">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            {/* Section Title */}
            <div className="section-tittle text-center mb-70">
              <span>Our Recent News</span>
              <h2>Our Recent Blog</h2>
            </div>
          </div>
        </div>

        {/* Display Blogs */}
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-blogs mb-30">
                <div className="blog-img">
                  <img
                    src={blog.image || "assets/img/gallery/blog1.png"}
                    alt=""
                  />
                </div>
                <div className="blogs-cap">
                  <div className="date-info">
                    <span>{blog.category}</span>
                    <p>{blog.date}</p>
                  </div>
                  <h4>{blog.title}</h4>
                  <a href={`/blog/${blog.id}`} className="read-more1">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
