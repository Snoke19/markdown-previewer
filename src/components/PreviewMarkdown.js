import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';


export default function PreviewMarkdown({ markDownText }) {

    const getMarkdownText = () => {
        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true
        });
        const rawMarkup = marked.parse(markDownText, { sanitize: false });
        return { __html: DOMPurify.sanitize(rawMarkup) };
    };

    return (
        <div className="flex-1 p-6 bg-white border-l border-gray-200 relative overflow-auto"
            style={{ boxShadow: 'inset -10px 0px 15px -15px rgba(0, 0, 0, 0.1)' }}>
            <div className="prose max-w-none text-gray-700">
                <div
                    dangerouslySetInnerHTML={getMarkdownText()}
                />
            </div>
        </div>
    )
}
