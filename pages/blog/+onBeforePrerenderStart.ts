// Block inheritance of the root onBeforePrerenderStart hook
// This ensures that pages/blog/+Page.tsx doesn't try to render static routes
export default function onBeforePrerenderStart() {
    return [];
}
