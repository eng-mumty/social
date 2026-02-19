import React, { useState } from 'react';
import { Image, Smile, Calendar, MapPin, Send, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PostCard from './PostCard';

const Feed = ({ onMenuClick }) => {
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: 'Marcus Chen',
            handle: '@marcuscodes',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            time: '2h ago',
            content: 'Just finished the new workspace setup! The vibe is absolutely unreal. Ready to crush some code this weekend. 💻 ✨ #SetupWars #DevLife',
            image: 'https://images.unsplash.com/photo-1497215842964-2227430d3d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            comments: 48,
            retweets: 12,
            likes: 1200,
        },
        {
            id: 2,
            author: 'Sarah Jenkins',
            handle: '@sarahj_ui',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            time: '5h ago',
            content: 'Does anyone else feel like UI design trends are cycling way faster than they used to? I blink and we\'re back to skeuomorphism but make it "clay". 🏺 🤔',
            comments: 124,
            retweets: 89,
            likes: 856,
        }
    ]);

    const handlePost = () => {
        if (!content.trim()) return;

        const newPost = {
            id: Date.now(),
            author: 'Alex Sterling',
            handle: '@alexdesigner',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
            time: 'Just now',
            content: content,
            comments: 0,
            retweets: 0,
            likes: 0,
        };

        setPosts([newPost, ...posts]);
        setContent('');
    };

    return (
        <main className="flex-1 border-r border-nexus-border/30 min-h-screen pb-20 md:pb-0 md:ml-20 xl:ml-72 mr-0 lg:mr-80">
            {/* Header */}
            <div className="sticky top-0 z-30 bg-nexus-bg/80 backdrop-blur-md border-b border-nexus-border/30 px-4 py-3 flex items-center gap-4">
                <button onClick={onMenuClick} className="md:hidden p-2 hover:bg-white/10 rounded-full">
                    <Menu size={24} />
                </button>
                <div className="flex-1">
                    <h1 className="text-xl font-bold text-white">Home</h1>
                </div>
            </div>

            {/* Create Post Input */}
            <div className="p-4 border-b border-nexus-border/30">
                <div className="flex gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                        alt="User"
                        className="w-12 h-12 rounded-full object-cover border-2 border-nexus-primary/20"
                    />
                    <div className="flex-1">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="What's happening?"
                            className="input-box bg-transparent text-xl text-white placeholder-gray-500 w-full resize-none outline-none min-h-[100px]"
                        />
                        <div className="flex items-center justify-between mt-4 text-nexus-primary border-t border-nexus-border/30 pt-3">
                            <div className="flex gap-4">
                                <button className="hover:bg-nexus-primary/10 p-2 rounded-full transition-colors"><Image size={20} /></button>
                                <button className="hover:bg-nexus-primary/10 p-2 rounded-full transition-colors"><Smile size={20} /></button>
                                <button className="hover:bg-nexus-primary/10 p-2 rounded-full transition-colors"><Calendar size={20} /></button>
                                <button className="hover:bg-nexus-primary/10 p-2 rounded-full transition-colors"><MapPin size={20} /></button>
                            </div>
                            <button
                                onClick={handlePost}
                                disabled={!content.trim()}
                                className="bg-nexus-primary hover:bg-nexus-accent disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-nexus-blue/20"
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feed */}
            <div className="pb-20">
                <AnimatePresence initial={false}>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </AnimatePresence>
            </div>
        </main>
    );
};

export default Feed;
