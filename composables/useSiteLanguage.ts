export const useSiteLanguage = () => {
    const { defaultLanguage, languages, rtlLanguages } = useAppConfig();
    const { locale } = useI18n();

    const siteLanguage = useLocalStorage("site_language", defaultLanguage);

    watchEffect(() => {
        locale.value = siteLanguage.value;
    });

    return {
        siteLanguage,
        dir: computed(() => (rtlLanguages.includes(siteLanguage.value) ? "rtl" : "ltr")),
        languages,
    };
};
