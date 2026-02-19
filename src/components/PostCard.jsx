import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes);

    const handleLike = () => {
        if (liked) {
            setLikeCount(prev => prev - 1);
        } else {
            setLikeCount(prev => prev + 1);
        }
        setLiked(!liked);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border-b border-nexus-border/30 p-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
        >
            <div className="flex gap-4">
                <div className="flex-shrink-0">
                    <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-white hover:underline">{post.author}</span>
                        <span className="text-nexus-subtext">{post.handle}</span>
                        <span className="text-nexus-subtext">·</span>
                        <span className="text-nexus-subtext hover:underline">{post.time}</span>
                    </div>

                    <p className="text-nexus-text text-[15px] leading-relaxed whitespace-pre-wrap mb-3">
                        {post.content}
                    </p>

                    {post.image && (
                        <div className="mb-3 rounded-2xl overflow-hidden border border-nexus-border/50">
                            <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-[500px]" />
                        </div>
                    )}

                    <div className="flex justify-between items-center max-w-md text-nexus-subtext mt-2">
                        <button className="group flex items-center gap-2 hover:text-nexus-primary transition-colors text-sm">
                            <div className="p-2 rounded-full group-hover:bg-nexus-primary/10 transition-colors">
                                <MessageCircle size={18} />
                            </div>
                            <span>{post.comments}</span>
                        </button>

                        <button className="group flex items-center gap-2 hover:text-green-500 transition-colors text-sm">
                            <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                                <Repeat size={18} />
                            </div>
                            <span>{post.retweets}</span>
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); handleLike(); }}
                            className={`group flex items-center gap-2 text-sm transition-colors ${liked ? 'text-pink-600' : 'hover:text-pink-600'}`}
                        >
                            <div className="p-2 rounded-full group-hover:bg-pink-600/10 transition-colors relative">
                                <motion.div
                                    whileTap={{ scale: 1.5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Heart size={18} fill={liked ? "currentColor" : "none"} />
                                </motion.div>
                            </div>
                            <AnimatePresence mode='wait'>
                                <motion.span
                                    key={likeCount}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 10, opacity: 0 }}
                                >
                                    {likeCount}
                                </motion.span>
                            </AnimatePresence>
                        </button>

                        <button className="group flex items-center gap-2 hover:text-nexus-primary transition-colors text-sm">
                            <div className="p-2 rounded-full group-hover:bg-nexus-primary/10 transition-colors">
                                <Share2 size={18} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PostCard;
