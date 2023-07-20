import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDown = () => {

  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const getMarkDownContent = async () => {
      // 多学习一下
      const res = await fetch('/markdown/Git.md')
      const content = await res.text();
      console.log('res: ', res, content);
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