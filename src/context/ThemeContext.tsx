import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext } from './themeContext.shared';
import type { Theme, ThemeContextType } from './theme.types';

const THEME_STORAGE_KEY = 'ap-website-theme';

// Simple localStorage helper (fallback to cookie if needed)
const saveTheme = (theme: Theme) => {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // Fallback to cookie
        document.cookie = `${THEME_STORAGE_KEY}=${theme}; max-age=${365 * 24 * 60 * 60}; path=/`;
    }
};

const getStoredTheme = (): Theme | null => {
    try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        return stored === 'light' || stored === 'dark' ? stored : null;
    } catch {
        // Fallback to cookie
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === THEME_STORAGE_KEY) {
                return value === 'light' || value === 'dark' ? value as Theme : null;
            }
        }
        return null;
    }
};

const getInitialTheme = (): Theme => {
    // Check stored theme first
    const stored = getStoredTheme();
    if (stored) return stored;

    // Fallback to system preference
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());

    // Apply theme changes to DOM
    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;

        console.log('🎨 Applying theme:', theme);

        // Remove ALL existing classes that might interfere
        root.classList.remove('dark', 'light');
        body.className = ''; // Clear all body classes

        // Add theme class to root
        root.classList.add(theme);

        // Force theme styles with !important via CSS variables
        if (theme === 'dark') {
            body.style.backgroundColor = '#000000';
            body.style.color = '#f9fafb';
        } else {
            body.style.backgroundColor = '#ffffff';
            body.style.color = '#111827';
        }

        // Also set data attribute for additional CSS targeting
        root.setAttribute('data-theme', theme);

        // Save theme to storage
        saveTheme(theme);

        console.log('✅ Theme applied:', theme);
        console.log('📋 Root classes:', root.className);
        console.log('📋 Body styles:', body.style.backgroundColor, body.style.color);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        console.log('Toggling theme from', theme, 'to', newTheme);
        setThemeState(newTheme);
    };

    const setTheme = (newTheme: Theme) => {
        console.log('Setting theme to:', newTheme);
        setThemeState(newTheme);
    };

    const value: ThemeContextType = {
        theme,
        toggleTheme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
