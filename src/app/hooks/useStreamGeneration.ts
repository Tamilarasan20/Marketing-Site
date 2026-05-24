import { useState, useCallback } from 'react';

export function useStreamGeneration() {
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generate = useCallback(async (tool: string, inputs: Record<string, string>) => {
    setIsLoading(true);
    setOutput('');
    setError('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool, inputs }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || 'Generation failed. Please try again.');
      }

      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setOutput((prev) => prev + chunk);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setOutput('');
    setError('');
  }, []);

  return { output, isLoading, error, generate, reset };
}
