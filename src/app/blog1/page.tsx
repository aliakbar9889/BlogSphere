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
          What We Think, We Become
        </h1>
        <p className="text-lg mb-4">
          In life, our thoughts play a powerful role in shaping our reality. The
          famous saying, <i>&quot;What we think, we become,&quot;</i> by Buddha highlights
          how our mindset and beliefs influence the outcomes of our lives. This
          simple yet profound idea is the foundation of personal growth,
          success, and happiness. Let&apos;s explore how our thoughts mold our future
          and why cultivating positive thinking is essential.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Power of Thoughts</h2>
        <p className="text-lg mb-4">
          Our mind is like a fertile field, and our thoughts are the seeds.
          Whatever we plant—be it positive or negative—will grow into our
          reality. If we constantly focus on fears, doubts, or failures, we tend
          to manifest those situations in our lives. Conversely, if we
          concentrate on hope, hard work, and success, we pave the way for a
          brighter future.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Mindset Shapes Behavior</h2>
        <p className="text-lg mb-4">
          Our thoughts not only affect our feelings but also influence our
          behavior:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Positive Thoughts: Inspire courage, perseverance, and innovation.</li>
          <li>Negative Thoughts: Lead to hesitation, procrastination, and missed opportunities.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Role of Self-Talk</h2>
        <p className="text-lg mb-4">
          The conversations we have with ourselves, often subconsciously, define
          our mental framework. Negative self-talk creates barriers, while
          positive affirmations break them. Being mindful of how we talk to
          ourselves can transform our mindset and improve our resilience.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Practical Steps to Harness the Power of Thoughts</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Practice Gratitude: Focus on the good things in your life to foster positivity.</li>
          <li>Visualize Success: Imagine achieving your goals; this prepares your mind for success.</li>
          <li>Challenge Negative Thoughts: Replace them with constructive ones.</li>
          <li>Surround Yourself with Positivity: Be around people who uplift and inspire you.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
        <p className="text-lg">
          &quot;What we think, we become&quot; teaches us the value of nurturing positive
          thoughts and beliefs. When we take charge of our mindset, we take
          charge of our destiny. Start today—choose thoughts that empower and
          inspire you, because the journey to becoming your best self begins in
          your mind.
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
