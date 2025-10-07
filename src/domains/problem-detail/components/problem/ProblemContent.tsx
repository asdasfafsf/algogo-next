interface ProblemContentProps {
  content: string;
}

export function ProblemContent({ content }: ProblemContentProps) {
  return (
    <section>
      <div 
        className="problem-content max-w-none
                   [&>*]:text-gray-700 [&>*]:leading-relaxed
                   [&>h1]:text-gray-900 [&>h1]:font-semibold [&>h1]:mb-4 [&>h1]:text-2xl
                   [&>h2]:text-gray-900 [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:text-xl
                   [&>h3]:text-gray-900 [&>h3]:font-semibold [&>h3]:mb-3 [&>h3]:text-lg
                   [&>strong]:text-gray-900 [&>strong]:font-semibold
                   [&>em]:text-gray-600 [&>em]:italic
                   [&>code]:text-violet-600 [&>code]:bg-violet-50 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono
                   [&>blockquote]:border-l-4 [&>blockquote]:border-amber-400 [&>blockquote]:bg-amber-50 [&>blockquote]:text-amber-900 [&>blockquote]:pl-4 [&>blockquote]:py-2 [&>blockquote]:rounded-r [&>blockquote]:my-4
                   [&>a]:text-blue-600 [&>a]:no-underline hover:[&>a]:underline
                   [&>img]:rounded-lg [&>img]:shadow-md [&>img]:my-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}