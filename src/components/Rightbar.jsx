import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

const Rightbar = () => {
    const trends = [
        { category: 'Technology · Trending', tag: '#CyberPunk2077', posts: '54.2K posts' },
        { category: 'Design · Trending', tag: 'Minimalism', posts: '12.8K posts' },
        { category: 'Photography · Trending', tag: '#GoldenHour', posts: '89.1K posts' },
        { category: 'Business · Trending', tag: 'Crypto', posts: '10.5K posts' },
    ];

    const follow = [
        { name: 'Alex M.', handle: '@alexdev', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { name: 'Lisa K.', handle: '@lisadesigns', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    ];

    return (
        <aside className="hidden lg:block w-80 fixed right-0 h-screen p-4 overflow-y-auto custom-scrollbar border-l border-nexus-border/30 bg-nexus-bg/50 backdrop-blur-xl z-40">
            <div className="sticky top-0 bg-nexus-bg/80 backdrop-blur-md z-10 pb-4">
                <div className="relative group">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within:text-nexus-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search Nexus..."
                        className="w-full bg-nexus-card border border-transparent focus:border-nexus-primary/50 text-white rounded-full py-2.5 pl-10 pr-4 outline-none transition-all focus:shadow-lg focus:shadow-nexus-blue/10"
                    />
                </div>
            </div>

            <div className="glass-panel rounded-2xl p-4 mb-4">
                <h2 className="text-xl font-bold mb-4">Trending for you</h2>
                <div className="space-y-4">
                    {trends.map((trend, i) => (
                        <div key={i} className="hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors -mx-2">
                            <div className="flex justify-between items-start">
                                <span className="text-xs text-nexus-subtext">{trend.category}</span>
                                <MoreHorizontal size={16} className="text-nexus-subtext hover:text-white" />
                            </div>
                            <p className="font-bold text-white mt-0.5">{trend.tag}</p>
                            <p className="text-xs text-nexus-subtext mt-0.5">{trend.posts}</p>
                        </div>
                    ))}
                </div>
                <button className="text-nexus-primary text-sm mt-4 hover:underline">Show more</button>
            </div>

            <div className="glass-panel rounded-2xl p-4">
                <h2 className="text-xl font-bold mb-4">Who to follow</h2>
                <div className="space-y-4">
                    {follow.map((user, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="font-bold text-sm hover:underline cursor-pointer">{user.name}</p>
                                    <p className="text-xs text-nexus-subtext">{user.handle}</p>
                                </div>
                            </div>
                            <button className="bg-white text-black text-sm font-bold px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Rightbar;
