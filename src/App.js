import PreviewMarkdown from "./components/PreviewMarkdown";
import EditorMarkdown from "./components/EditorMarkDown";
import { useState } from "react";

export default function App() {

    const [text, setText] = useState('');

    function updateText(event) {
        setText(event.target.value);
    }

    return (
        <>
            <div className="flex justify-center p-4 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 shadow-md">
                <p className="text-white text-2xl font-semibold">Markdown Editor</p>
            </div>
            <div class="h-screen flex bg-gradient-to-r from-gray-50 to-gray-100">
                <EditorMarkdown handleText={updateText} text={text} />
                <PreviewMarkdown markDownText={text} />
            </div>
        </>
    )
}