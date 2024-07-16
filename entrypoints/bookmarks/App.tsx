import React from "react";
import useSWR from "swr";
import { reqBookmarkData } from "../request";

function App() {
    const [txt, setTxt] = React.useState("");
    const { data } = useSWR("?", reqBookmarkData);
    const filteredData = data?.filter((item) => item.title.includes(txt));

    return (
        <>
            <input value={txt} onChange={(v) => setTxt(v.target.value)} />
            <ul>
                {filteredData?.map((item, i) => (
                    <li key={item.url}>
                        <input onKeyDown={handleKeydown} />
                        <p>{item.title}</p>
                        <div>{JSON.stringify(item.tags)}</div>
                    </li>
                ))}
            </ul>
        </>
    );

    function handleKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key.toLowerCase() !== "enter") return;

        // addTag(?)
    }

    function addTag(uuid: number, tag: string) {
        if (!data) return;
        if (!data[uuid].tags) data[uuid].tags = [];

        data[uuid].tags.push(tag);
    }
}

export default App;
