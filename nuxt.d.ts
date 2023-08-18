declare module "#app" {
    interface PageMeta {
        navbar?: {
            order?: number;
            label?: string;
            hide?: boolean;
        };
    }
}

export {};
