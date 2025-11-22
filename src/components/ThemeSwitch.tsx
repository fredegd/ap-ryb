import { useTheme } from '../context/ThemeContext';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    console.log('🎭 ThemeSwitch rendered with theme:', theme);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔄 Theme switch button clicked! Current theme:', theme);
        console.log('🔄 About to toggle theme...');
        toggleTheme();
    };

    return (
        <button
            onClick={handleClick}
            className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-red-500/10 focus:outline-none focus:ring-2 focus:ring-neon-yellow/50 border-2 border-red-500"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            <span className="text-xs bg-yellow-400 text-black px-1 rounded">{theme}</span>
            {theme === 'light' ? (
                // Moon icon for dark mode
                <svg
                    className="w-5 h-5 text-gray-900 dark:text-gray-50 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            ) : (
                // Sun icon for light mode
                <svg
                    className="w-5 h-5 text-gray-900 dark:text-gray-50 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            )}
        </button>
    );
};

export default ThemeSwitch;