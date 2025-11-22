import { useTheme } from '../context/ThemeContext';

const ThemeDebugger = () => {
    const { theme } = useTheme();

    return (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-mono z-[9999]">
            Theme: {theme}
        </div>
    );
};

export default ThemeDebugger;