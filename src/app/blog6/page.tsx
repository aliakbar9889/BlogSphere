'use client'
import React, { useState } from 'react';
import Comments from '../components/Comments';
import { FaRegCommentDots } from 'react-icons/fa'; // React Icons Library se Import

const BlogPage: React.FC = () => {
  const [showComments, setShowComments] = useState(false); // Toggle Comments Visibility

  const toggleComments = () => {
    setShowComments((prev) => !prev); // Toggle between show and hide
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Time Was God’s First Creation
        </h1>
        <p className="text-lg mb-4">
          Time, often considered the most precious and elusive resource, is fundamental to our existence. The phrase “Time was God’s first creation” reflects the profound role time plays in shaping the universe, the cosmos, and our lives. Before the concept of light, matter, or life itself, there was time—an essential force that governs everything. In this blog, we explore the significance of time, how it was created, and why it holds such an important place in both the spiritual and physical realms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Concept of Time in Spirituality</h2>
        <p className="text-lg mb-4">
          In many spiritual and religious traditions, time is viewed as a divine creation, set into motion by God. In Christianity, it’s believed that God created time as part of His divine plan. The Bible begins with the statement, “In the beginning, God created the heavens and the earth,” marking the beginning of time and space. Similarly, in Islam, time is considered a creation of Allah, with the Qur’an mentioning that Allah is the Lord of time and that everything happens within its framework.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Time as the Foundation of Creation</h2>
        <p className="text-lg mb-4">
          The creation of time is often seen as the starting point for everything in the universe. Without time, there would be no beginning or end to anything. Time allows the universe to expand, the seasons to change, and life to evolve. It creates the rhythm of nature, the cycles of day and night, and the progress of all things. In this sense, time is not just a concept we measure with clocks, but a force that guides and shapes everything around us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Relativity of Time</h2>
        <p className="text-lg mb-4">
          In the physical world, time is relative. Albert Einstein’s theory of relativity tells us that time is not fixed—it can change depending on speed and gravity. For example, time moves slower near a massive object or when traveling close to the speed of light. This discovery has deepened our understanding of how time works in the universe. Yet, despite its relativity, time remains a constant thread that connects all aspects of existence.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Why Time Was the First Creation</h2>
        <p className="text-lg mb-4">
          Time was likely the first creation because, without it, nothing could exist or unfold. It provides the framework for everything that follows—whether it’s the creation of the stars and planets, the birth of life on Earth, or the evolution of human beings. Time sets the pace for the unfolding of all creation. Before the first moments of time, there was no “before,” no “after,” and no “change.” Time is the ultimate backdrop against which the drama of existence plays out.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Time in Our Lives</h2>
        <p className="text-lg mb-4">
          Time is not just a cosmic force; it plays a central role in our personal lives as well. Our perception of time shapes how we live and experience the world. The moments we share with loved ones, the challenges we face, and the accomplishments we achieve are all defined by time. However, time is also something we often take for granted, rushing through days, weeks, and years without fully appreciating its value. The passage of time reminds us of the impermanence of life and encourages us to live in the present and cherish every moment.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Gift of Time</h2>
        <p className="text-lg mb-4">
          Time is one of the greatest gifts we have, but it is also one of the most fleeting. Once it passes, it cannot be regained. Every day is an opportunity to make the most of the time we are given. How we spend our time determines the quality of our lives and the legacy we leave behind. It is in our power to use time wisely—to make meaningful connections, pursue our dreams, and contribute to the world. By valuing time, we honor the creation that is at the heart of everything.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
        <p className="text-lg">
          “Time was God’s first creation” invites us to reflect on the importance of time, both in the context of the universe and in our daily lives. Time is a powerful force that governs existence, yet it is also something we must respect and cherish. By understanding the significance of time, we can make the most of our lives, live more mindfully, and appreciate the precious moments that make up our journey. Time, after all, is not just a measurement—it is the essence of life itself.
        </p>

        {/* Comment Icon */}
        <div className="mt-6 flex justify-center">
          <FaRegCommentDots
            onClick={toggleComments}
            className="text-blue-500 text-4xl cursor-pointer hover:text-blue-700 transition"
          />
        </div>

        {/* Comments Section */}
        {showComments && <Comments />}
      </div>
    </div>
  );
};

export default BlogPage;
