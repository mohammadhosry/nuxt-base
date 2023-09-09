export const useSiteLanguage = () => {
    const { defaultLanguage, languages, rtlLanguages } = useAppConfig();

    const siteLanguage = useLocalStorage("site_language", defaultLanguage);

    return {
        siteLanguage,
        dir: computed(() => (rtlLanguages.includes(siteLanguage.value) ? "rtl" : "ltr")),
        languages,
    };
};
