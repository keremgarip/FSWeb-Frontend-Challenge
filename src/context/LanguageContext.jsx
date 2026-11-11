import { createContext, useContext, useEffect, useState } from "react";

import enData from "../data/en.json";
import trData from "../data/tr.json";

const LanguageContext = createContext(null);

const translations = {
    en: enData,
    tr: trData
};

function getInitialLanguage() {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "en" || savedLanguage === "tr") {
        return savedLanguage;
    }

    const browserLanguage = navigator.language
        .toLowerCase()
        .split("-")[0];

    return browserLanguage === "tr" ? "tr" : "en";
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(getInitialLanguage);

    const data = translations[language];


    useEffect(() => {
        localStorage.setItem("language", language);
        document.documentElement.lang = language;
    }, [language]);

    const changeLanguage = () => {
        setLanguage((current) =>
            current === "en" ? "tr" : "en"
        );
    };

    return (
        <LanguageContext.Provider value={{ language, data, changeLanguage, }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used within LanguageProvider"
        )
    }

    return context;
}