'use client'; // Ensuring this is a client-side component

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
          Luck is Not a Business Model
        </h1>
        <p className="text-lg mb-4">
          In the world of entrepreneurship, it&apos;s easy to fall into the trap of thinking that luck is the key to success. Many business owners look at successful people and assume they must have had some form of luck on their side. However, relying on luck as a business model is a dangerous strategy. True success comes from hard work, planning, and the ability to adapt to challenges—not just from waiting for a stroke of good fortune. Let&apos;s dive into why luck shouldn&apos;t be a factor in your business strategy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Luck vs. Hard Work</h2>
        <p className="text-lg mb-4">
          Luck is unpredictable. It&apos;s often something that happens by chance, with no real control over it. On the other hand, hard work is something you can control. Entrepreneurs who achieve lasting success are the ones who put in the effort day in and day out, learning from mistakes, building solid foundations, and focusing on growth. While luck may play a role in occasional breakthroughs, it&apos;s the effort and persistence that create real, sustainable success.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Importance of Strategy</h2>
        <p className="text-lg mb-4">
          A successful business is built on a strong strategy—one that involves setting clear goals, identifying target markets, understanding customer needs, and leveraging resources effectively. While luck can sometimes lead to unexpected opportunities, relying on chance alone is not a viable strategy for business success. A good strategy takes into account the risks, rewards, and potential obstacles that can arise, and provides a roadmap to navigate them successfully.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Role of Adaptability</h2>
        <p className="text-lg mb-4">
          Successful businesses are not just built on planning—they are built on the ability to adapt. The business landscape is constantly changing, and companies that thrive are the ones that can pivot when necessary. The ability to learn from failure, analyze trends, and adjust your business model accordingly is far more important than hoping for good luck. Entrepreneurs who are flexible and open to change will find more opportunities than those waiting for luck to take its course.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Building a Strong Network</h2>
        <p className="text-lg mb-4">
          Networking plays a crucial role in business success. Connections with other professionals, potential clients, and mentors can provide you with the support, advice, and opportunities you need to grow your business. However, networking isn&apos;t about waiting for luck to strike—it&apos;s about being proactive, building relationships, and offering value to others. When you put in the work to cultivate a strong network, you increase your chances of finding success, regardless of luck.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Power of Consistency</h2>
        <p className="text-lg mb-4">
          Consistency is one of the most important factors in business success. While luck may play a role in a single success, consistency in effort is what leads to long-term growth. By continuously improving your products or services, staying committed to your vision, and maintaining high standards, you ensure that your business remains competitive and relevant. Success that comes through consistency is far more dependable than any random stroke of luck.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
        <p className="text-lg">
          While it&apos;s easy to attribute success to luck, the reality is that luck is a fleeting and unreliable factor. Building a successful business requires a combination of hard work, strategy, adaptability, networking, and consistency. Rather than waiting for luck to strike, take control of your business and focus on the aspects you can influence. When you put in the work and focus on what&apos;s in your power to change, the chances of achieving long-term success increase significantly. Remember: Luck is not a business model.
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
