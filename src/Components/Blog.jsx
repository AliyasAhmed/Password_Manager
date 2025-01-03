import React from "react";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Importance of Elderly Care at Home",
      date: "January 3, 2025",
      author: "Healthcare Team",
      excerpt:
        "Discover how professional elderly care services ensure comfort, safety, and dignity for seniors in their own homes.",
      link: "#",
    },
    {
      title: "Critical Care at Home: Transforming Healthcare",
      date: "December 20, 2024",
      author: "Medical Experts",
      excerpt:
        "Learn how home-based critical care solutions are making advanced medical support accessible and personalized.",
      link: "#",
    },
    {
      title: "Mother and Baby Care: A Guide for New Parents",
      date: "December 10, 2024",
      author: "Parenting Specialists",
      excerpt:
        "Support for new mothers and newborns with tips on postnatal care, breastfeeding, and mental well-being.",
      link: "#",
    },
    {
      title: "Top 5 Physiotherapy Exercises for Recovery",
      date: "November 25, 2024",
      author: "Physiotherapy Team",
      excerpt:
        "Explore effective physiotherapy exercises to aid recovery from injuries and improve mobility.",
      link: "#",
    },
    {
      title: "How to Set Up an ICU at Home: A Step-by-Step Guide",
      date: "November 15, 2024",
      author: "Critical Care Team",
      excerpt:
        "A comprehensive guide to creating an ICU-like environment at home for critically ill patients.",
      link: "#",
    },
  ];

  return (
    <div className="p-5 bg-gray-50">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Blog</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Stay informed with the latest updates, tips, and insights on home healthcare, medical advancements, and wellness.
        </p>
      </section>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                By {post.author} on {post.date}
              </p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
