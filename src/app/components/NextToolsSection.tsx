import { Link } from 'react-router';
import { getNextTools } from '../data/toolsData';

interface Props {
  currentSlug: string;
}

export default function NextToolsSection({ currentSlug }: Props) {
  const nextTools = getNextTools(currentSlug, 10);

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold text-gray-900">10 More Free AI Tools</h3>
        <Link to="/tools" className="text-sm text-violet-600 hover:underline font-medium">
          View all {'→'}
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {nextTools.map((tool) => (
          <Link
            key={tool.slug}
            to={`/tools/${tool.slug}`}
            className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-violet-300 hover:shadow-sm transition-all flex items-start gap-3"
          >
            <span className="text-xl flex-shrink-0 mt-0.5">{tool.icon}</span>
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-violet-700 transition-colors">
                {tool.name}
              </p>
              <p className="text-sm text-gray-500 mt-0.5 leading-relaxed line-clamp-1">
                {tool.description}
              </p>
              <span className="text-xs text-violet-500 font-medium mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                Try free →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
