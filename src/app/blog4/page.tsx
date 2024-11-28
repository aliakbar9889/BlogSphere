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
          Pain is Never Permanent
        </h1>
        <p className="text-lg mb-4">
          Pain is something we all face at some point in our lives—whether it’s physical, emotional, or mental. It can feel overwhelming, leaving us stuck in a place of despair. However, it’s important to remember that pain is never permanent. It’s a temporary phase, one that is often followed by healing, growth, and new perspectives. In this blog, we’ll explore the nature of pain, why it doesn’t last forever, and how to embrace its temporary nature in order to move forward in life.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Understanding Pain</h2>
        <p className="text-lg mb-4">
          Pain can come in many forms—physical discomfort from an injury, the heartache of losing a loved one, or the emotional burden of failure. Regardless of its source, pain can make us feel helpless and stuck. However, pain is a natural part of life, and it signals that something in our body or mind needs attention. It’s a warning sign, a signal to slow down, heal, or reassess our situation. Recognizing this is the first step toward understanding that pain is temporary and part of a bigger picture.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Temporary Nature of Pain</h2>
        <p className="text-lg mb-4">
          One of the most powerful truths about pain is that it doesn’t last forever. Whether it’s physical pain after an injury or emotional pain from a difficult life event, time has a healing effect. The intensity of pain diminishes over time as the body and mind recover. This is especially true when we take proactive steps to address the cause of our pain, whether through medical treatment, therapy, or personal reflection.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Embracing the Healing Process</h2>
        <p className="text-lg mb-4">
          Healing from pain, while it may take time, is an essential process. It’s during this time of recovery that we often gain new insights about ourselves and life. Embracing this process rather than resisting it can make the journey smoother. Allowing ourselves to feel the pain, to process it, and to understand it can create room for growth. Healing teaches us resilience, patience, and how to navigate challenges with more strength and wisdom.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Power of Perspective</h2>
        <p className="text-lg mb-4">
          When we experience pain, it’s easy to feel like it will never end. But shifting our perspective can help us see the bigger picture. Pain often forces us to slow down, to rethink our choices, and to change our approach to life. This process of reflection and adaptation can lead to personal growth and transformation. By viewing pain as a temporary challenge rather than a permanent state, we open ourselves up to healing and new opportunities.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">How to Cope with Pain</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Seek Support: Reach out to friends, family, or a professional who can offer guidance and support.</li>
          <li>Practice Self-Care: Focus on activities that help restore your body and mind, such as rest, exercise, or meditation.</li>
          <li>Be Patient: Understand that healing takes time, and trust the process.</li>
          <li>Reflect and Learn: Use pain as an opportunity for self-reflection and to grow stronger mentally and emotionally.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Role of Hope</h2>
        <p className="text-lg mb-4">
          Hope is a powerful antidote to pain. In moments of suffering, it’s easy to lose sight of the possibility of better days ahead. However, hope helps us hold on, knowing that the pain we are experiencing will eventually subside. When we believe that things will get better, it fuels our motivation to keep moving forward, even when the road is tough. Holding onto hope allows us to see beyond the pain and towards the possibility of healing and happiness.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
        <p className="text-lg">
          Pain, though difficult, is never permanent. It is a temporary phase in our lives that, when embraced with patience and perspective, can lead to personal growth and healing. By recognizing that pain is not forever and that healing is always possible, we give ourselves the strength to move forward. Remember, no matter how intense the pain may feel in the moment, it will eventually pass, and you will come out stronger on the other side.
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
