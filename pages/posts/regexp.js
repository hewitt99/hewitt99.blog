import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Regexp = () => {

  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const getMarkDownContent = async () => {
      // todo 这样读取文件内容的
      const res = await fetch('/markdown/正则.md')
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

export default Regexp