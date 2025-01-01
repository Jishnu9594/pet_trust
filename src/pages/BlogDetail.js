import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://pettrust-backend-1wzw.onrender.com/pet/blogs/${id}/`
        );
        setBlog(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Blog not found.");
        } else {
          setError("An error occurred while fetching the blog.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  const handleBack = () => {
    navigate("/blog"); // Navigate to the /blog route
  };

  if (loading) {
    return (
      <div className="blog-detail-loader">
        <p>Loading blog details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-detail-error">
        <p>{error}</p>
        <button onClick={handleBack} className="back-button">
          Back to Blog List
        </button>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <button onClick={handleBack} className="back-button">
        Back to Blog List
      </button>
      <div className="blog-header">
        <h1>{blog.title}</h1>
        <p className="category">{blog.category}</p>
        <p className="date">{blog.date}</p>
      </div>
      <div className="blog-image">
        <img
          src={blog.image || "assets/img/gallery/blog1.png"}
          alt={blog.title}
        />
      </div>
      <div className="blog-content">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
