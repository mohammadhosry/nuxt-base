import 'h3';

declare module 'h3' {
    interface H3EventContext {
        auth: User | null;
    }
}

// Important: add an empty export to make the file a module
export { };
