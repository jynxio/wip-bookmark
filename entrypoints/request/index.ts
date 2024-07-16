type Bookmark = { title: string; url: string; date?: number; tags?: string[] };

async function reqBookmarkData() {
    console.log("reqBookmarkData");

    const data: Bookmark[] = [];
    const res = await browser.bookmarks.getTree();

    traverseBookmarks(res);

    function traverseBookmarks(nodes: Awaited<ReturnType<typeof browser.bookmarks.getTree>>) {
        for (const node of nodes) {
            node.url && data.push({ title: node.title, url: node.url, date: node.dateAdded });
            node.children && traverseBookmarks(node.children);
        }
    }

    return data;
}

export { reqBookmarkData };
export default { reqBookmarkData };
