import React from 'react';
import { Home, Bell, Mail, Bookmark, User, MoreHorizontal, Hash, Users, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen, darkMode, toggleDarkMode }) => {
    const navItems = [
        { icon: Home, label: 'Feed', active: true },
        { icon: Hash, label: 'Explore' },
        { icon: Bell, label: 'Notifications', badge: 3 },
        { icon: Mail, label: 'Messages' },
        { icon: Bookmark, label: 'Bookmarks' },
        { icon: Users, label: 'Communities' },
        { icon: User, label: 'Profile' },
        { icon: MoreHorizontal, label: 'More' },
    ];

    const SidebarContent = () => (
        <div className="h-full flex flex-col p-4">
            <div className="flex items-center gap-3 px-4 py-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-nexus-primary to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Nexus</h1>
                {mobileMenuOpen && (
                    <button onClick={() => setMobileMenuOpen(false)} className="ml-auto md:hidden p-2 hover:bg-white/10 rounded-full">
                        <X size={24} />
                    </button>
                )}
            </div>

            <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
                {navItems.map((item, index) => (
                    <a
                        key={item.label}
                        href="#"
                        className={`sidebar-link group ${item.active ? 'active text-nexus-primary' : ''}`}
                    >
                        <item.icon className={`w-7 h-7 transition-colors ${item.active ? 'text-nexus-primary fill-nexus-primary/20' : 'group-hover:text-nexus-primary'}`} strokeWidth={item.active ? 2.5 : 2} />
                        <span className="hidden xl:inline">{item.label}</span>
                        <span className="xl:hidden md:hidden inline">{item.label}</span>
                        {item.badge && (
                            <span className="ml-auto bg-nexus-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                {item.badge}
                            </span>
                        )}
                    </a>
                ))}
            </nav>

            <div className="mt-auto px-4 py-4 pt-6">
                <button
                    onClick={toggleDarkMode}
                    className="w-full flex items-center gap-4 px-4 py-3 text-lg font-medium text-nexus-subtext hover:bg-white/5 hover:text-white rounded-xl transition-all duration-200 mb-4"
                >
                    {darkMode ? <Sun className="w-7 h-7" /> : <Moon className="w-7 h-7" />}
                    <span className="hidden xl:inline">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>

                <button className="w-full btn-primary flex items-center justify-center gap-2 shadow-cyan-500/20">
                    <span className="text-xl">+</span>
                    <span className="hidden xl:inline">Post</span>
                </button>
            </div>

            <div className="mt-4 flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-full cursor-pointer transition-colors">
                <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-nexus-primary/50"
                />
                <div className="hidden xl:block overflow-hidden">
                    <p className="text-sm font-bold truncate">Alex Sterling</p>
                    <p className="text-xs text-nexus-subtext truncate">@alexdesigner</p>
                </div>
                <MoreHorizontal className="ml-auto hidden xl:block text-nexus-subtext" size={16} />
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-20 xl:w-72 fixed h-screen border-r border-nexus-border/30 bg-nexus-bg/50 backdrop-blur-xl z-50">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="w-3/4 max-w-sm h-full bg-nexus-bg border-r border-nexus-border/50"
                            onClick={e => e.stopPropagation()}
                        >
                            <SidebarContent />
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
