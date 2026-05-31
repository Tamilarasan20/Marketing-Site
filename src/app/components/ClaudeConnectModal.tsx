import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from './ui/dialog';

// ── Types ─────────────────────────────────────────────────────────────────
type Tab = 'mcp' | 'plugin';

interface Step {
  title: string;
  description: React.ReactNode;
}

// ── Copy-to-clipboard snippet ─────────────────────────────────────────────
function CopyBox({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center justify-between bg-[#ebebeb] rounded-[10px] px-4 py-3 mt-2 gap-3">
      <code className="text-[13px] font-mono text-[#1a1a1a] break-all leading-snug">{value}</code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy to clipboard"
        className="shrink-0 text-[#555] hover:text-[#111] transition-colors"
      >
        {copied ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  );
}

// ── External link button ───────────────────────────────────────────────────
function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#ebebeb] hover:bg-[#dedede] transition-colors text-[#1a1a1a] text-[13px] font-['General_Sans:Medium',sans-serif] px-4 py-2 rounded-[8px] mt-2 w-fit"
    >
      {children}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  );
}

// ── Step row ───────────────────────────────────────────────────────────────
function StepRow({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-[30px] h-[30px] rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[13px] font-['Satoshi:Bold',sans-serif] shrink-0">
          {number}
        </div>
        {number < 3 && <div className="w-px flex-1 bg-[#ddd] mt-2 min-h-[24px]" />}
      </div>
      <div className="pb-6 flex-1 min-w-0">
        <p className="font-['Satoshi:Bold',sans-serif] text-[15px] text-[#111] leading-tight mb-1">{title}</p>
        <div className="text-[14px] text-[#555] font-['General_Sans:Medium',sans-serif] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

// ── MCP tab steps ──────────────────────────────────────────────────────────
function McpSteps() {
  return (
    <div className="mt-6">
      <StepRow number={1} title="Open Claude settings">
        <p>Launch the app or open <strong className="text-[#111]">claude.ai</strong> and go to <strong className="text-[#111]">Customize → Connectors</strong>.</p>
        <LinkButton href="https://claude.ai/settings/connectors">
          Customize → Connectors
        </LinkButton>
      </StepRow>

      <StepRow number={2} title="Add a custom connector">
        <p>Name it <strong className="text-[#111]">Loraloop</strong> and paste the URL below.</p>
        <CopyBox value="https://www.loraloop.com/api/mcp" />
      </StepRow>

      <StepRow number={3} title="Connect and sign in">
        <p>
          Click <strong className="text-[#111]">Add → Connect</strong>, sign in to your Loraloop account, and you're in.
          Now ask Claude to write a post, launch a campaign, or publish to social media.
        </p>
      </StepRow>
    </div>
  );
}

// ── Plugin tab steps ───────────────────────────────────────────────────────
function PluginSteps() {
  return (
    <div className="mt-6">
      <StepRow number={1} title="Install the MCP server">
        <p>Run this command in your terminal to install the Loraloop plugin globally.</p>
        <CopyBox value="npm install -g @loraloop/mcp-server" />
      </StepRow>

      <StepRow number={2} title="Register with Claude Code">
        <p>Add Loraloop to Claude Code with your API URL and credentials.</p>
        <CopyBox value={`claude mcp add --transport stdio loraloop -- npx @loraloop/mcp-server`} />
      </StepRow>

      <StepRow number={3} title="Start building">
        <p>
          Ask Claude Code to <strong className="text-[#111]">write posts</strong>, <strong className="text-[#111]">trigger agents</strong>, or <strong className="text-[#111]">publish to social media</strong> directly from your terminal or IDE.
        </p>
        <LinkButton href="https://github.com/Tamilarasan20/Loraloop-Main-App/tree/main/mcp-server">
          View on GitHub
        </LinkButton>
      </StepRow>
    </div>
  );
}

// ── Anthropic asterisk icon ────────────────────────────────────────────────
function AnthropicIcon({ size = 16, color = '#c96b3f' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke={color} strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      </g>
    </svg>
  );
}

// ── Main modal ─────────────────────────────────────────────────────────────
interface ClaudeConnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ClaudeConnectModal({ open, onOpenChange }: ClaudeConnectModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>('mcp');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!bg-[#f5f5f0] !border-0 !rounded-[20px] !shadow-2xl w-full !max-w-[560px] p-0 overflow-hidden gap-0">

        {/* Close button */}
        <DialogClose className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e5e5e0] transition-colors text-[#555] hover:text-[#111]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </DialogClose>

        <div className="px-8 pt-8 pb-6">

          {/* Badge */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 border border-[#d4d4cc] rounded-full px-4 py-1.5 bg-white/60">
              <AnthropicIcon size={14} />
              <span className="text-[12px] font-['Satoshi:Bold',sans-serif] tracking-wider text-[#555] uppercase">
                Loraloop · Claude · MCP
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="font-['Satoshi:Bold',sans-serif] text-[26px] text-[#111] leading-tight mb-1.5">
              Connect Loraloop to Claude
            </h2>
            <p className="text-[14px] text-[#777] font-['General_Sans:Medium',sans-serif]">
              Three steps to plug Loraloop into Claude.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 bg-[#eaeae5] rounded-[12px] p-1 mb-1">
            {(['mcp', 'plugin'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-[9px] text-[14px] font-['Satoshi:Bold',sans-serif] transition-all ${
                  activeTab === tab
                    ? 'bg-white shadow-sm text-[#111] border border-[#e0e0da]'
                    : 'text-[#777] hover:text-[#444]'
                }`}
              >
                <AnthropicIcon size={14} color={activeTab === tab ? '#c96b3f' : '#aaa'} />
                {tab === 'mcp' ? 'MCP' : 'Plugin'}
              </button>
            ))}
          </div>

          {/* Tab description */}
          <p className="text-[12px] text-[#999] font-['General_Sans:Medium',sans-serif] text-center mt-2 mb-1">
            {activeTab === 'mcp'
              ? 'For Claude.ai — no installation needed'
              : 'For Claude Code & Claude Desktop — runs locally'}
          </p>

          {/* Steps */}
          {activeTab === 'mcp' ? <McpSteps /> : <PluginSteps />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
