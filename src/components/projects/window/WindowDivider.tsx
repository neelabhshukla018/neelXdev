"use client";

export function WindowDivider() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-6
        bottom-6
        hidden
        -translate-x-1/2
        lg:block
      "
      aria-hidden="true"
    >
      <div
        className="
          h-full
          w-px
          rounded-full
          bg-gradient-to-b
          from-transparent
          via-white/10
          to-transparent
        "
      />
    </div>
  );
}

export default WindowDivider;