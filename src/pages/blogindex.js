import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://pettrust-backend-1wzw.onrender.com/pet/blogs/"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to shorten content
  const getShortContent = (content, limit = 100) => {
    if (!content) return "";
    return content.length > limit
      ? content.substring(0, limit) + "..."
      : content;
  };

  return (
    <div className="home_blog-area section-padding30">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            <div className="section-tittle text-center mb-70">
              <span>Our Recent News</span>
              <h2>Our Recent Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-blogs mb-30">
                <div className="blog-img">
                  <img
                    src={blog.image || "assets/img/gallery/blog1.png"}
                    alt={blog.title}
                  />
                </div>
                <div className="blogs-cap">
                  <div className="date-info">
                    <span>{blog.category}</span>
                    <p>{blog.date}</p>
                  </div>
                  <h4>{blog.title}</h4>
                  <p>{getShortContent(blog.content)}</p>{" "}
                  {/* Shortened content */}
                  <Link to={`/blogs/${blog.id}`} className="read-more1">
                    Read more
                  </Link>
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
