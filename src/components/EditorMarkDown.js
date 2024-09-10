
export default function EditorMarkdown({ handleText, text }) {

    return (
        <div class="flex-1 p-6 bg-gray-100 relative">
            <textarea
                className="w-full 
                    h-full p-4 
                    text-gray-700 
                    bg-white border 
                    border-gray-300 
                    rounded-lg 
                    shadow-inner 
                    focus:ring-2 
                    focus:ring-indigo-400 
                    outline-none 
                    transition 
                    duration-300 
                    resize-none"
                spellCheck="false"
                placeholder="Type your markdown here..."
                value={text}
                onChange={handleText}>
            </textarea>
        </div>
    )
}