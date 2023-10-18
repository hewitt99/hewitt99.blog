import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDown = () => {

  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const getMarkDownContent = async () => {
      const res = await fetch('/markdown/ReactBeautifulDnD.md')
      const content = await res.text();
      setMarkdownContent(content)
    }
    getMarkDownContent()
  }, []);



  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>

  )
}

export default MarkDown