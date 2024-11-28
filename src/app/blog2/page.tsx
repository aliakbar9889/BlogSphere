'use client';
import React, { useState } from 'react';
import Comments from '../components/Comments';
import { FaRegCommentDots } from 'react-icons/fa'; // React Icons Library se Import

const BlogPage2: React.FC = () => {
  const [showComments, setShowComments] = useState(false); // Toggle Comments Visibility

  const toggleComments = () => {
    setShowComments((prev) => !prev); // Toggle between show and hide
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Good Things Come in Good Time
        </h1>
        <p className="text-lg mb-4">
          In life, everything happens in its own time. The famous saying, <i>&quot;Good things come to those who wait,&quot;</i> reminds us that patience is key to achieving our goals. Whether it&apos;s personal growth, career success, or finding happiness, everything comes in its due course if we stay persistent and trust the process. Let&apos;s explore why patience is a virtue and how waiting for the right moment can lead to amazing results.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Value of Patience</h2>
        <p className="text-lg mb-4">
          Patience is the ability to wait calmly without frustration. In a fast-paced world where instant gratification is expected, practicing patience can feel challenging. However, patience is essential for personal growth, as it allows us to fully experience the journey without rushing towards the destination. It teaches us to enjoy the process, not just the result.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Trusting the Process</h2>
        <p className="text-lg mb-4">
          Good things come to those who trust the process, even when it feels like nothing is happening. It is easy to get discouraged when results aren&apos;t immediate, but persistence and consistency are the keys to success. Every step, no matter how small, brings you closer to your goal.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Why Timing is Everything</h2>
        <p className="text-lg mb-4">
          Timing plays a crucial role in life. Just as plants take time to grow, our dreams and aspirations need the right conditions to flourish. By learning to trust the timing of events and not rushing things, we can make the most of each opportunity that comes our way.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Power of Patience in Overcoming Obstacles</h2>
        <p className="text-lg mb-4">
          Challenges and setbacks are part of every journey. Patience allows us to stay calm during tough times and helps us maintain a clear focus on the bigger picture. It gives us the resilience to bounce back stronger from failures and keeps us moving forward towards success.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
        <p className="text-lg">
          &quot;Good things come in good time&quot; teaches us the importance of patience and perseverance. When we stay committed to our goals and trust in the process, amazing things happen. Remember, everything has its own time—so stay patient, stay positive, and good things will surely come your way.
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

export default BlogPage2;
