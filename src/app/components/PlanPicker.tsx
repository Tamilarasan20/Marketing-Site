import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown } from "lucide-react";

export interface PickerOption {
  value: number;
  label: string;
}

interface MenuPlace {
  left: number;
  top: number;
  width: number;
  maxHeight: number;
  up: boolean;
}

const font = { fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 } as const;
const ROW_PX = 36;
const MENU_MAX_PX = 340;
const MENU_MIN_WIDTH_PX = 320;
const EDGE_PX = 8;

/**
 * Credit / seat picker on a plan card - mirrors app/pricing/PlanPicker.tsx in
 * Loraloop-Main-App. A button opens a menu of choices (check on the picked one,
 * blue highlight under the pointer or keyboard); the menu is portalled so the
 * swipeable card row never clips it. One option or no onChange = read-only.
 */
export default function PlanPicker({ label, value, options, onChange }: {
  label: string;
  value: number;
  options: PickerOption[];
  onChange?: (value: number) => void;
}) {
  const fixed = options.length < 2 || !onChange;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [place, setPlace] = useState<MenuPlace | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();
  const selectedIdx = Math.max(0, options.findIndex((o) => o.value === value));

  const close = useCallback((refocus: boolean) => {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  }, []);

  const openMenu = () => {
    const r = buttonRef.current?.getBoundingClientRect();
    if (!r) return;
    const want = Math.min(options.length * ROW_PX + EDGE_PX, MENU_MAX_PX);
    const below = window.innerHeight - r.bottom - EDGE_PX;
    const above = r.top - EDGE_PX;
    const up = below < want && above > below;
    const width = Math.min(Math.max(r.width, MENU_MIN_WIDTH_PX), window.innerWidth - 2 * EDGE_PX);
    setPlace({
      left: Math.max(EDGE_PX, Math.min(r.left, window.innerWidth - width - EDGE_PX)),
      top: up ? r.top - 4 : r.bottom + 4,
      width,
      maxHeight: Math.max(ROW_PX * 3, Math.min(want, up ? above : below)),
      up,
    });
    setActive(selectedIdx);
    setOpen(true);
  };

  const pick = (idx: number) => {
    const option = options[idx];
    if (option) onChange?.(option.value);
    close(true);
  };

  // Outside click, page scroll or resize closes the menu (it is fixed to where the button was).
  useEffect(() => {
    if (!open) return;
    const inside = (target: EventTarget | null) =>
      target instanceof Node && (listRef.current?.contains(target) || buttonRef.current?.contains(target));
    const onDown = (e: MouseEvent) => { if (!inside(e.target)) close(false); };
    const onScroll = (e: Event) => { if (!inside(e.target)) close(false); };
    const onResize = () => close(false);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close]);

  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);
  useEffect(() => {
    if (open) document.getElementById(`${id}-opt-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [open, active, id]);

  const onButtonKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openMenu();
    }
  };

  const onListKey = (e: KeyboardEvent<HTMLUListElement>) => {
    const last = options.length - 1;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => Math.min(last, i + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => Math.max(0, i - 1)); }
    else if (e.key === "Home") { e.preventDefault(); setActive(0); }
    else if (e.key === "End") { e.preventDefault(); setActive(last); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(active); }
    else if (e.key === "Escape") { e.preventDefault(); close(true); }
    else if (e.key === "Tab") close(false);
  };

  const shell = "w-full h-[38px] flex items-center gap-2 rounded-[10px] border border-white/10 bg-white/[0.04] pl-3 pr-2.5 text-left text-[14px] text-white";

  return (
    <div className="flex flex-col gap-1">
      <span id={`${id}-label`} style={font} className="text-[12px] uppercase tracking-[0.6px] text-[#9CA3AF]">
        {label}
      </span>
      {fixed ? (
        <div style={font} className={shell} aria-labelledby={`${id}-label`}>
          <span className="flex-1 truncate">{options[selectedIdx]?.label}</span>
        </div>
      ) : (
        <button
          ref={buttonRef}
          type="button"
          onClick={() => (open ? close(false) : openMenu())}
          onKeyDown={onButtonKey}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label ${id}-value`}
          style={font}
          className={`${shell} transition-colors hover:border-white/20 focus:outline-none focus-visible:border-[#1877F2] ${open ? "border-[#1877F2]" : ""}`}
        >
          <span id={`${id}-value`} className="flex-1 truncate">{options[selectedIdx]?.label}</span>
          <ChevronDown className={`h-4 w-4 shrink-0 text-[#9CA3AF] transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      )}

      {open && place && typeof document !== "undefined" && createPortal(
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${id}-label`}
          aria-activedescendant={`${id}-opt-${active}`}
          onKeyDown={onListKey}
          style={{
            ...font,
            position: "fixed",
            left: place.left,
            top: place.top,
            width: place.width,
            maxHeight: place.maxHeight,
            transform: place.up ? "translateY(-100%)" : undefined,
          }}
          className="z-[100] overflow-y-auto rounded-[12px] border border-white/10 bg-[#1c1c1e] p-1 shadow-[0_16px_40px_rgba(0,0,0,0.55)] outline-none"
        >
          {options.map((o, idx) => {
            const isActive = idx === active;
            const isSelected = idx === selectedIdx;
            return (
              <li
                key={o.value}
                id={`${id}-opt-${idx}`}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActive(idx)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => pick(idx)}
                className={`flex cursor-pointer items-center gap-2 rounded-[8px] px-2.5 py-2 text-[14px] leading-[18px] ${
                  isActive ? "bg-[#1877F2] text-white" : "text-[#E5E7EB]"
                }`}
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                  {isSelected && <Check className="h-3.5 w-3.5" strokeWidth={2.5} />}
                </span>
                <span className="flex-1">{o.label}</span>
              </li>
            );
          })}
        </ul>,
        document.body,
      )}
    </div>
  );
}
