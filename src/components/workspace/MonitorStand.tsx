export default function MonitorStand() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Neck */}
      <div
        className="
          h-16
          w-8
          rounded-b-[18px]
          bg-gradient-to-b
          from-[#d8d8d8]
          via-[#bdbdbd]
          to-[#8e8e8e]
          shadow-inner
        "
      />

      {/* Joint */}
      <div
        className="
          -mt-1
          h-2
          w-12
          rounded-full
          bg-gradient-to-b
          from-[#dadada]
          to-[#999]
        "
      />

      {/* Base */}
      <div
        className="
          mt-3
          h-4
          w-40
          rounded-full
          bg-gradient-to-b
          from-[#ececec]
          via-[#cfcfcf]
          to-[#8d8d8d]
          shadow-[0_8px_25px_rgba(0,0,0,.25)]
        "
      />

      {/* Shadow */}
      <div
        className="
          mt-1
          h-5
          w-52
          rounded-full
          bg-black/25
          blur-lg
        "
      />
    </div>
  );
}