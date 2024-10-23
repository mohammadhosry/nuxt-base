export const useSiteLanguage = () => {
    const { languages, rtlLanguages } = useAppConfig();
    const { locale, setLocale } = useI18n();

    // const siteLanguage = import.meta.client
    //     ? useLocalStorage("site_language", defaultLanguage)
    //     : ref(defaultLanguage);

    // const siteLanguageCookie = useCookie("site_language");
    // const siteLanguage = useCookieLocale();

    // const siteLanguage = ref(siteLanguageCookie.value || defaultLanguage);

    const dir = computed(() => (rtlLanguages.includes(locale.value) ? "rtl" : "ltr"));

    watchEffect(() => {
        // locale.value = siteLanguage.value;
        console.log('watchEffect', { dir: dir.value, locale: locale.value });
    });

    console.log({ dir: dir.value, locale: locale.value });

    // onBeforeMount(() => {
    //     // locale.value = siteLanguage.value;
    //     console.log("onBeforeMount", { dir: dir.value, locale: locale.value });
    //     setLocale(locale.value);
    // });

    // console.log("prosses", import.meta.client);

    // watch(
    //     siteLanguage,
    //     () => {
    //         // if (import.meta.client) {
    //         //     locale.value = siteLanguage.value;
    //         // }
    //         setLocale(siteLanguage.value);
    //     },
    //     {
    //         immediate: true,
    //     }
    // );

    return {
        // siteLanguage,
        dir,
        languages,
    };
};
