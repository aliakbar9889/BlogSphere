'use client';
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
          Love for All, Hatred for None
        </h1>
        <p className="text-lg mb-4">
          The phrase &ldquo;Love for All, Hatred for None&rdquo; resonates deeply in a world that often seems divided by differences. It encourages us to embrace love and understanding instead of animosity and division. Love has the power to bridge gaps, heal wounds, and foster a sense of unity, while hatred only creates barriers. In this blog, we&rsquo;ll explore the significance of love, the destructive nature of hatred, and how we can cultivate a world where love reigns supreme.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Power of Love</h2>
        <p className="text-lg mb-4">
          Love is one of the most profound and transformative emotions we experience as human beings. It has the ability to heal, inspire, and connect people, regardless of their background, beliefs, or circumstances. Love creates bonds that transcend differences and fosters mutual respect and understanding. Whether it&rsquo;s love for family, friends, or even strangers, it has the power to uplift individuals and communities, bringing people closer together in harmony.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Dangers of Hatred</h2>
        <p className="text-lg mb-4">
          On the other hand, hatred is a destructive force that erodes relationships, communities, and even entire societies. It fuels conflict, division, and misunderstanding. Hatred blinds us to the humanity of others, leading to discrimination, violence, and conflict. It thrives on ignorance and fear, perpetuating cycles of negativity that harm both individuals and the collective well-being of society. When we allow hatred to take root in our hearts, we close ourselves off to the possibility of love, understanding, and peace.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Choosing Love Over Hatred</h2>
        <p className="text-lg mb-4">
          In a world full of challenges, we have the power to choose how we respond. Choosing love over hatred is a conscious decision that requires us to look beyond our differences and see the shared humanity in everyone we meet. It means embracing empathy, compassion, and understanding, even when faced with conflict or adversity. When we choose love, we break the cycle of hatred and create a space for healing, peace, and unity to flourish.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">How to Cultivate Love in Our Lives</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Practice Empathy: Try to understand others&rsquo; perspectives, even when they differ from your own.</li>
          <li>Be Kind: Small acts of kindness, whether it&rsquo;s a smile or a helping hand, can make a big difference.</li>
          <li>Forgive: Let go of past grudges and make room for healing by forgiving others.</li>
          <li>Encourage Unity: Promote inclusivity and support people from all walks of life.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Ripple Effect of Love</h2>
        <p className="text-lg mb-4">
          When we show love to others, it doesn&rsquo;t just affect the person we are interacting with—it creates a ripple effect that spreads to those around them. One act of kindness or understanding can inspire others to do the same. This creates a cycle of positive change that can transform communities, cities, and even entire nations. Love has the potential to shift the collective mindset, moving us from a place of fear and division to one of understanding and peace.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Importance of Forgiveness</h2>
        <p className="text-lg mb-4">
          Forgiveness plays a crucial role in cultivating a world filled with love and understanding. Holding onto anger and resentment only fuels hatred and prevents healing. When we forgive, we release the hold that negativity has on us and open the door to peace and reconciliation. Forgiveness doesn&rsquo;t mean condoning harmful behavior, but it means choosing to let go of the emotional burden that comes with holding grudges. It&rsquo;s an act of love, both for others and for ourselves.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
        <p className="text-lg">
          &ldquo;Love for All, Hatred for None&rdquo; is not just a noble ideal—it&rsquo;s a call to action. It reminds us that we have the power to create a world where love, kindness, and understanding are the foundation of all our relationships. By choosing love over hatred, we can break the cycle of division and create a future filled with unity, peace, and compassion. Let&rsquo;s embrace this mindset and contribute to a world where love reigns supreme.
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
